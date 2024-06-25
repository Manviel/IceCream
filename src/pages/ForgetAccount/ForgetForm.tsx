import { Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { JSX } from 'solid-js/jsx-runtime';

import Field from '../../components/Field';
import ErrorMessage from '../../components/Field/ErrorMessage';

import { ActionTypes } from '../../models/config';
import { Pages } from '../../models';
import { DB_USERS_TABLE, useDataBase } from '../../services/db';

const ForgetForm: Component = () => {
  const [form, setForm] = createStore({
    email: ''
  });

  const [status, setStatus] = createSignal('');

  const handleChangeForm: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setForm({ [target.name]: target.value });

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async e => {
    e.preventDefault();

    const db = await useDataBase();

    const response = await db.get(DB_USERS_TABLE, form.email);

    if (response) {
      db.delete(DB_USERS_TABLE, form.email);
    } else {
      setStatus('Account not found. Check your details and please try again.');
    }

    setStatus('Your account is deleted. Thanks for using our product.');

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
        {Pages.ForgetAccount}
      </button>
    </form>
  );
};

export default ForgetForm;
