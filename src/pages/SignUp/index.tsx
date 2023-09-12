import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';

import { Pages, Paths } from '../../models';
import { ActionTypes } from '../../models/config';

import RegisterForm from './RegisterForm';

const SignUp: Component = () => (
  <PageDecorator headline={Pages.SignUp} subtitle='To get started'>
    <RegisterForm />

    <div class='flex col os material screen'>
      <Link href={Paths.SignIn} class={ActionTypes.Link}>
        Already have an account?
      </Link>
    </div>
  </PageDecorator>
);

export default SignUp;
