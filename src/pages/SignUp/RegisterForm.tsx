import { Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useNavigate } from '@solidjs/router';
import { JSX } from 'solid-js/jsx-runtime';

import Field from '../../components/Field';
import ErrorMessage from '../../components/Field/ErrorMessage';

import { ActionTypes } from '../../models/config';
import { Pages, Paths } from '../../models';
import { DB_LOGS_TABLE, DB_USERS_TABLE, useDataBase } from '../../services/db';

const RegisterForm: Component = () => {
  const [form, setForm] = createStore({
    fullName: '',
    email: '',
    password: ''
  });

  const [status, setStatus] = createSignal('');

  const navigate = useNavigate();

  const handleChangeForm: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setForm({ [target.name]: target.value });

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async e => {
    e.preventDefault();

    const db = await useDataBase();

    try {
      await db.add(DB_USERS_TABLE, {
        fullName: form.fullName,
        email: form.email,
        password: form.password
      });
      await db.add(DB_LOGS_TABLE, { authorized: 'true' });

      navigate(Paths.Relax, { replace: true });
    } catch {
      setStatus('Account already exist. Check your details and please try again.');
    }

    db.close();
  };

  return (
    <form onSubmit={handleSubmit} class="layer view rounded flex col">
      <Field
        name="fullName"
        label="Full Name"
        type="text"
        value={form.fullName}
        onInput={handleChangeForm}
        required
        minlength="2"
      />

      <Field
        name="email"
        label="Email"
        type="email"
        value={form.email}
        onInput={handleChangeForm}
        required
      />

      <Field
        name="password"
        label="Password"
        type="password"
        value={form.password}
        onInput={handleChangeForm}
        required
        minlength="6"
      />

      {status() && <ErrorMessage>{status()}</ErrorMessage>}

      <button type="submit" class={ActionTypes.Contained}>
        {Pages.SignUp}
      </button>
    </form>
  );
};

export default RegisterForm;
