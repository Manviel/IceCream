import { Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { openDB } from 'idb';

import Field from '../../components/Field';
import ErrorMessage from '../../components/Field/ErrorMessage';

import { ActionTypes, DB_NAME, DB_USERS_TABLE } from '../../models/config';
import { Pages } from '../../models';

import '../../shared/index.css';

const RegisterForm: Component = () => {
  const [form, setForm] = createStore({
    fullName: '',
    email: '',
    password: '',
  });

  const [status, setStatus] = createSignal('');

  const handleChangeForm = ({ target }: any) =>
    setForm({ [target.name]: target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const db = await openDB(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(DB_USERS_TABLE);
      },
    });

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
        name='fullName'
        label='Full Name'
        type='text'
        value={form.fullName}
        onChange={handleChangeForm}
        required
        minlength='2'
      />

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
        {Pages.SignUp}
      </button>
    </form>
  );
};

export default RegisterForm;
