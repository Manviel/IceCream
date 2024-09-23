import { Component } from 'solid-js';
import { A } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';

import { Pages, Paths } from '../../global';
import { ActionTypes, getStack } from '../../global/theme';

import LoginForm from './LoginForm';

const SignIn: Component = () => (
  <PageDecorator headline={Pages.SignIn} subtitle="For faster checkout">
    <LoginForm />

    <div class={getStack('material screen')}>
      <A href={Paths.SignUp} class={ActionTypes.Link}>
        Dont have an account?
      </A>

      <A href={Paths.ForgetAccount} class={ActionTypes.Link}>
        Want to delete an account
      </A>
    </div>
  </PageDecorator>
);

export default SignIn;
