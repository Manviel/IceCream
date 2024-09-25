import { Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useNavigate } from '@solidjs/router';
import { JSX } from 'solid-js/jsx-runtime';

import Field from '../../components/Field';
import ErrorMessage from '../../components/Field/ErrorMessage';

import { ActionTypes } from '../../global/theme';
import { Pages, Paths } from '../../global';
import { DB_AUTH_KEY, DB_LOGS_TABLE, DB_USERS_TABLE, useDataBase } from '../../services/db';

const LoginForm: Component = () => {
  const [form, setForm] = createStore({
    email: '',
  });

  const [status, setStatus] = createSignal('');

  const navigate = useNavigate();

  const handleChangeForm: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setForm({ [target.name]: target.value });

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async e => {
    e.preventDefault();

    const db = await useDataBase();

    const response = await db.get(DB_USERS_TABLE, form.email);

    if (response) {
      await db.add(DB_LOGS_TABLE, { [DB_AUTH_KEY]: 'true' });

      navigate(Paths.Relax, { replace: true });
    } else {
      setStatus('Account not found. Check your details and please try again.');
    }

    db.close();
  };

  return (
    <form onSubmit={handleSubmit} class="layer view rounded flex col">
      <Field
        name="email"
        label="Email"
        type="email"
        value={form.email}
        onInput={handleChangeForm}
        required
      />

      {status() && <ErrorMessage>{status()}</ErrorMessage>}

      <button type="submit" class={ActionTypes.Contained}>
        {Pages.SignIn}
      </button>
    </form>
  );
};

export default LoginForm;
