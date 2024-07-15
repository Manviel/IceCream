import { Component } from 'solid-js';
import { A } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';

import { Pages, Paths } from '../../global';
import { ActionTypes } from '../../global/theme';

import ForgetForm from './ForgetForm';

const ForgetAccount: Component = () => (
  <PageDecorator headline={Pages.ForgetAccount} subtitle="All your data will be wiped">
    <ForgetForm />

    <div class="flex col os material screen">
      <A href={Paths.SignUp} class={ActionTypes.Link}>
        Create an account
      </A>

      <A href={Paths.SignIn} class={ActionTypes.Link}>
        Log into account
      </A>
    </div>
  </PageDecorator>
);

export default ForgetAccount;
