import { Component, onMount, createSignal, For, Show } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';

import ErrorMessage from '../../../components/Field/ErrorMessage';
import HelpTooltip from '../../../components/Tooltip/HelpTooltip';

import { ActionTypes, getStack, ShapeIcon } from '../../../global/theme';

import GoForwardIcon from '../../../assets/icons/go-forward.svg';

import { GApi, GoogleEventItem } from './types';
import { DISCOVERY_DOC, GOOGLE_API_CLIENT, SCOPES } from './constants';

import './Calendar.css';

declare global {
  interface Window {
    gapi: GApi;
  }
}

const dateFormat = (date: Date) => new Intl.DateTimeFormat(navigator.language).format(date);

const timeFormatter = new Intl.DateTimeFormat(navigator.language, {
  hour: 'numeric',
  minute: 'numeric'
});

const Calendar: Component = () => {
  const [gapiInited, setGapiInited] = createSignal(false);
  const [status, setStatus] = createSignal('');
  const [userInfo, setUserInfo] = createSignal<GoogleEventItem[]>();

  const updateSigninStatus = (isSignedIn: boolean) => setGapiInited(isSignedIn);

  async function initializeGapiClient() {
    try {
      await window.gapi.client.init({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scope: SCOPES
      });

      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    } catch {
      setStatus('Failed to initialize Google API client');
    }
  }

  onMount(() => {
    createScriptLoader({
      src: GOOGLE_API_CLIENT,
      async onLoad() {
        window.gapi.load('client:auth2', initializeGapiClient);
      }
    });
  });

  async function getUpcomingEvents() {
    try {
      const request = {
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
      };

      const { result } = await window.gapi.client.calendar.events.list(request);

      setUserInfo(result.items);
    } catch {
      setStatus('Something went wrong! Please try again later');
    }
  }

  function handleAuthClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignoutClick() {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  const addEvent = () => {
    const date = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const organizer = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();

    date.setHours(date.getHours() + 1);

    const event = {
      summary: 'Google I/O',
      location: 'Google Meet',
      description: 'A chance to hear more about Workspace',
      start: {
        dateTime: date.toISOString(),
        timeZone
      },
      end: {
        dateTime: date.toISOString(),
        timeZone
      },
      recurrence: ['RRULE:FREQ=DAILY;COUNT=2;INTERVAL=2'],
      attendees: [{ email: organizer.getEmail() }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 }
        ]
      }
    };

    const request = window.gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event
    });

    request.execute(() => getUpcomingEvents());
  };

  return (
    <div class="flex col proximity">
      <section class={getStack('layer')}>
        {gapiInited() ? (
          <>
            <div class="flex justify-between items-center gap">
              <button type="button" onClick={addEvent} class={ActionTypes.Contained}>
                Add Event
              </button>

              <button type="button" onClick={getUpcomingEvents} class={ShapeIcon.Default}>
                <HelpTooltip name="Refresh event list">
                  <GoForwardIcon />
                </HelpTooltip>
              </button>
            </div>

            <button type="button" onClick={handleSignoutClick} class={ActionTypes.Secondary}>
              Sign Out
            </button>
          </>
        ) : (
          <button type="button" onClick={handleAuthClick} class={ActionTypes.Contained}>
            Authorize
          </button>
        )}

        {status() && <ErrorMessage>{status()}</ErrorMessage>}
      </section>

      <ul class="flex col gap">
        <Show when={!userInfo()?.length}>
          <li class="price chip">Your list is empty.</li>
        </Show>

        <For each={userInfo()}>
          {item => (
            <li class={getStack('alias event')}>
              <strong class="card-sub">{item.summary}</strong>
              <p class="term grey-light">{item.description}</p>

              <div class="flex justify-between items-center">
                <time class="red">{dateFormat(new Date(item.start.dateTime))}</time>
                <time class="chip slot">{timeFormatter.format(new Date(item.end.dateTime))}</time>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default Calendar;
