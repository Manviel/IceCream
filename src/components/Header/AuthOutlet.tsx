import { Component, onMount } from 'solid-js';
import { A } from '@solidjs/router';

import { ActionTypes } from '../../global/theme';
import { Pages, Paths } from '../../global';
import { DB_LOGS_TABLE, useAuthorization, getDB } from '../../services/db';

const AuthOutlet: Component = () => {
  const { isAuthed, verifyStorage } = useAuthorization();

  onMount(async () => {
    await verifyStorage();
  });

  const logOut = async () => {
    try {
      const db = await getDB();
      await db.clear(DB_LOGS_TABLE);
    } catch (err) {
      console.error('Failed to log out', err);
    }

    await verifyStorage();
  };

  return (
    <header class="flex items-center justify-between depth ornament legible">
      {isAuthed() ? (
        <>
          <A href={Paths.Relax} class={ActionTypes.Secondary}>
            My Account
          </A>

          <button type="button" onClick={logOut} class={ActionTypes.Contained}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <h4 class="card-sub">Want more?</h4>

          <A href={Paths.SignIn} class={ActionTypes.Contained}>
            {Pages.SignIn}
          </A>
        </>
      )}
    </header>
  );
};

export default AuthOutlet;
