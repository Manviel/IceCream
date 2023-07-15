import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import Field from '../../components/Field';

import { ActionTypes } from '../../models/config';

const LoginForm: Component = () => {
  const [form, setForm] = createStore({
    email: '',
    password: '',
  });

  const handleChangeForm = ({ target }: any) =>
    setForm({ [target.name]: target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} class='view'>
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
      />

      <button type='submit' class={ActionTypes.Contained}>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
