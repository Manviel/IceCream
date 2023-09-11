import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';

import { Pages, Paths } from '../../models';
import { ActionTypes } from '../../models/config';

import ForgetForm from './ForgetForm';

const ForgetAccount: Component = () => (
  <PageDecorator
    headline={Pages.ForgetAccount}
    subtitle='All your data will be wiped'
  >
    <ForgetForm />

    <div class='flex col os material screen'>
      <Link href={Paths.SignUp} class={ActionTypes.Link}>
        Create an account
      </Link>

      <Link href={Paths.SignIn} class={ActionTypes.Link}>
        Log into account
      </Link>
    </div>
  </PageDecorator>
);

export default ForgetAccount;
