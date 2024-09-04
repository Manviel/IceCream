import { Component, onMount, createSignal } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';

import ErrorMessage from '../../../components/Field/ErrorMessage';

import { ActionTypes, getStack } from '../../../global/theme';
import { DB_AUTH_KEY, DB_LOGS_TABLE, useDataBase } from '../../../services/db';

import { GApi, GAccounts, TokenClient, TokenResponse } from './types';
import { DISCOVERY_DOC, GOOGLE_API_CLIENT, GOOGLE_IDENTITY, SCOPES } from './constants';

declare global {
  interface Window {
    gapi: GApi;
    google: GAccounts;
  }
}

const Calendar: Component = () => {
  const [gisInited, setGisInited] = createSignal(false);
  const [gapiInited, setGapiInited] = createSignal(false);
  const [token, setToken] = createSignal<TokenClient>();
  const [userInfo, setUserInfo] = createSignal('');
  const [status, setStatus] = createSignal('');

  async function initializeGapiClient() {
    await window.gapi.client.init({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      discoveryDocs: [DISCOVERY_DOC]
    });

    setGapiInited(true);
  }

  function handleAuthClick() {
    if (window.gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      token()?.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      token()?.requestAccessToken({ prompt: '' });
    }
  }

  function handleSignoutClick() {
    const tokenClient = window.gapi.client.getToken();

    if (tokenClient !== null) {
      window.google.accounts.oauth2.revoke(tokenClient.access_token, () => setStatus('Done'));
      window.gapi.client.setToken('');

      setUserInfo('');
    }
  }

  const handleTokenClient = async (res: TokenResponse) => {
    const db = await useDataBase();

    await db.put(DB_LOGS_TABLE, { [DB_AUTH_KEY]: res.access_token });

    db.close();
  };

  onMount(async () => {
    const db = await useDataBase();

    const response = await db.get(DB_LOGS_TABLE, 'true');

    createScriptLoader({
      src: GOOGLE_API_CLIENT,
      async onLoad() {
        window.gapi.load('client', initializeGapiClient);
      }
    });

    if (response[DB_AUTH_KEY] !== true) {
      createScriptLoader({
        src: GOOGLE_IDENTITY,
        async onLoad() {
          const tokenClient = window.google.accounts.oauth2.initTokenClient({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            scope: SCOPES,
            callback: handleTokenClient,
            error_callback: (err) => setStatus(err.message)
          });

          setToken(tokenClient);
          setGisInited(true);
        }
      });
    }

    db.close();
  });

  return (
    <div class={getStack('layer')}>
      <p class="term">Load the client library</p>

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

      {status() && <ErrorMessage>{status()}</ErrorMessage>}
    </div>
  );
};

export default Calendar;
