import { Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

import Field from '../../components/Field';
import ErrorMessage from '../../components/Field/ErrorMessage';

import { ActionTypes } from '../../models/config';
import { Pages } from '../../models';
import { DB_USERS_TABLE, useDataBase } from '../../shared/db';

import '../../shared/index.css';

const LoginForm: Component = () => {
  const [form, setForm] = createStore({
    email: '',
    password: '',
  });

  const [status, setStatus] = createSignal('');

  const handleChangeForm = ({ target }: any) =>
    setForm({ [target.name]: target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const db = await useDataBase();

    try {
      await db.get(DB_USERS_TABLE, form.email);
    } catch {
      setStatus('Account not found. Check your details and please try again.');
    }

    db.close();
  };

  return (
    <form onSubmit={handleSubmit} class='layer view rounded flex col'>
      <Field
        name='email'
        label='Email'
        type='email'
        value={form.email}
        onChange={handleChangeForm}
        required
      />

      <Field
        name='password'
        label='Password'
        type='password'
        value={form.password}
        onChange={handleChangeForm}
        required
        minlength='6'
      />

      {status() && <ErrorMessage>{status()}</ErrorMessage>}

      <button type='submit' class={ActionTypes.Contained}>
        {Pages.SignIn}
      </button>
    </form>
  );
};

export default LoginForm;
