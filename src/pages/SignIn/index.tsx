import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import { Pages } from '../../models';

import LoginForm from './LoginForm';

const SignIn: Component = () => (
  <PageDecorator headline={Pages.SignIn} subtitle='For faster checkout'>
    <LoginForm />
  </PageDecorator>
);

export default SignIn;
