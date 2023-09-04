import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';

import { Pages } from '../../models';

import LoginForm from './LoginForm';

const SignIn: Component = () => (
  <PageDecorator headline={Pages.SignIn} subtitle='For faster checkout'>
    <LoginForm />

    <div class='flex col os material screen'>
      <Link href='/register' class='connect concise'>
        Dont have an account?
      </Link>

      <Link href='/forgot-password' class='connect concise'>
        Forgot password?
      </Link>
    </div>
  </PageDecorator>
);

export default SignIn;
