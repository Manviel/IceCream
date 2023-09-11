import { Component, createSignal, onMount } from 'solid-js';
import { Link } from '@solidjs/router';

import { ActionTypes } from '../../models/config';
import { DB_LOGS_TABLE, useDataBase } from '../../services/db';
import { Pages, Paths } from '../../models';

const AuthOutlet: Component = () => {
  const [isAuthed, setIsAuthed] = createSignal(false);

  const loadFromStorage = async () => {
    const db = await useDataBase();

    const response = await db.get(DB_LOGS_TABLE, 'true');

    if (response) {
      setIsAuthed(true);
    } else {
      setIsAuthed(false);
    }

    db.close();
  };

  onMount(async () => {
    await loadFromStorage();
  });

  const logOut = async () => {
    const db = await useDataBase();

    db.clear(DB_LOGS_TABLE);

    await loadFromStorage();
  };

  return (
    <header class='flex items-center justify-between depth ornament view'>
      {isAuthed() ? (
        <>
          <Link href={Paths.Relax} class={ActionTypes.Secondary}>
            My Account
          </Link>

          <button type='button' onClick={logOut} class={ActionTypes.Contained}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <h4 class='card-sub'>Want more?</h4>

          <Link href={Paths.SignIn} class={ActionTypes.Contained}>
            {Pages.SignIn}
          </Link>
        </>
      )}
    </header>
  );
};

export default AuthOutlet;
