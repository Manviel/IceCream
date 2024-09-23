import { Component } from 'solid-js';
import { A } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';

import { Pages, Paths } from '../../global';
import { ActionTypes, getStack } from '../../global/theme';

import RegisterForm from './RegisterForm';

const SignUp: Component = () => (
  <PageDecorator headline={Pages.SignUp} subtitle="To get started">
    <RegisterForm />

    <div class={getStack('material screen')}>
      <A href={Paths.SignIn} class={ActionTypes.Link}>
        Already have an account?
      </A>
    </div>
  </PageDecorator>
);

export default SignUp;
