import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';

import { Pages, Paths } from '../../models';
import { ActionTypes } from '../../models/config';

import LoginForm from './LoginForm';

const SignIn: Component = () => (
  <PageDecorator headline={Pages.SignIn} subtitle='For faster checkout'>
    <LoginForm />

    <div class='flex col os material screen'>
      <Link href={Paths.SignUp} class={ActionTypes.Link}>
        Dont have an account?
      </Link>

      <Link href={Paths.ForgetAccount} class={ActionTypes.Link}>
        Want to delete an account
      </Link>
    </div>
  </PageDecorator>
);

export default SignIn;
