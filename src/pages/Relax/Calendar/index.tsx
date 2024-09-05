import { Component, onMount, createSignal, For, Show } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';

import ErrorMessage from '../../../components/Field/ErrorMessage';

import { ActionTypes, getStack } from '../../../global/theme';

import { GApi, GoogleEventItem } from './types';
import { DISCOVERY_DOC, GOOGLE_API_CLIENT, SCOPES } from './constants';

import './Calendar.css';

declare global {
  interface Window {
    gapi: GApi;
  }
}

const dateFormat = (date: string) =>
  new Intl.DateTimeFormat(navigator.language).format(new Date(date));

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
    await window.gapi.client.init({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: SCOPES
    });

    window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
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

    date.setHours(date.getHours() + 1);

    const event = {
      summary: 'Google I/O',
      location: 'Google Meet',
      description: 'A chance to hear more about Workspace',
      start: {
        dateTime: date.toISOString(),
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: date.toISOString(),
        timeZone: 'America/Los_Angeles'
      },
      recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
      attendees: [{ email: 'abc@google.com' }],
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

    request.execute(() => setStatus('Done'));
  };

  return (
    <div class={getStack('layer')}>
      <p class="term">Google client</p>

      {gapiInited() ? (
        <>
          <button type="button" onClick={getUpcomingEvents} class={ActionTypes.Secondary}>
            Load Events
          </button>

          <ul class={getStack('card info')}>
            <Show when={!userInfo()?.length}>
              <li class='price chip'>Your list is empty.</li>
            </Show>

            <For each={userInfo()}>
              {item => (
                <li class={getStack('alias event')}>
                  <strong class="card-sub">{item.summary}</strong>
                  <p class="term grey-light">{item.description}</p>

                  <div class="flex justify-between items-center">
                    <time class="red">{dateFormat(item.start.dateTime)}</time>
                    <time class="chip slot">
                      {timeFormatter.format(new Date(item.end.dateTime))}
                    </time>
                  </div>
                </li>
              )}
            </For>
          </ul>

          <button type="button" onClick={addEvent} class={ActionTypes.Contained}>
            Add Event
          </button>

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
    </div>
  );
};

export default Calendar;
