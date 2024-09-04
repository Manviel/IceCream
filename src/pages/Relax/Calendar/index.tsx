import { Component, onMount, createSignal } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';

import { ActionTypes, getStack } from '../../../global/theme';

import { GApi, GAccounts, TokenClient, TokenResponse } from './types';
import { DISCOVERY_DOC, GOOGLE_API_CLIENT, GOOGLE_IDENTITY, SCOPES } from './constants';

declare global {
  interface Window {
    gapi: GApi;
    google: GAccounts;
  }
}

const Calendar: Component = () => {
  const gapi: GApi = window.gapi;
  const google: GAccounts = window.google;

  const [gisInited, setGisInited] = createSignal(false);
  const [gapiInited, setGapiInited] = createSignal(false);
  const [token, setToken] = createSignal<TokenClient>();
  const [userInfo, setUserInfo] = createSignal('');

  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      discoveryDocs: [DISCOVERY_DOC]
    });

    setGapiInited(true);
  }

  function handleAuthClick() {
    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      token()?.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      token()?.requestAccessToken({ prompt: '' });
    }
  }

  function handleSignoutClick() {
    const tokenClient = gapi.client.getToken();

    if (tokenClient !== null) {
      google.accounts.oauth2.revoke(tokenClient.access_token, () => console.log('Done'));
      gapi.client.setToken('');

      setUserInfo('');
    }
  }

  const handleTokenClient = (res: TokenResponse) => {
    console.log(res);
  }

  onMount(() => {
    createScriptLoader({
      src: GOOGLE_API_CLIENT,
      async onLoad() {
        gapi?.load('client', initializeGapiClient);
      }
    });
  
    createScriptLoader({
      src: GOOGLE_IDENTITY,
      async onLoad() {
        const tokenClient = google?.accounts.oauth2.initTokenClient({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          scope: SCOPES,
          callback: handleTokenClient,
        });
  
        setToken(tokenClient);
        setGisInited(true);
      }
    });
  })

  return (
    <div class={getStack('layer')}>
      <p class='term'>Load the client library</p>

      <button
        type="button"
        id="authorize_button"
        onClick={handleAuthClick}
        disabled={!gapiInited && !gisInited}
        class={ActionTypes.Contained}
      >
        Authorize
      </button>

      {userInfo() && (
        <button
          type="button"
          id="signout_button"
          onClick={handleSignoutClick}
          class={ActionTypes.Secondary}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Calendar;
