import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import PageDecorator from '../../components/PageDecorator';
import { SubTitle } from '../../components/Header';

import { Pages, Paths } from '../../models';
import { ActionTypes } from '../../models/config';

import Expert from './Expert';
import Reviews from './Expert/Reviews';
import Results from './Expert/Results';

const Profile: Component = () => {
  return (
    <PageDecorator headline={Pages.Profile} subtitle='Overview'>
      <Expert />

      <header class='flex items-center justify-between screen'>
        <SubTitle spot='Insights' />

        <Results />
      </header>

      <p class='info'>2.2 Billion Visually Impaired People in 2022.</p>

      <header class='flex items-center justify-between depth ornament view rounded'>
        <h4 class='card-sub'>Want more?</h4>

        <Link href={Paths.SignIn} class={ActionTypes.Contained}>
          Sign In
        </Link>
      </header>

      <article class='grid products portfolio screen'>
        <Reviews />
      </article>
    </PageDecorator>
  );
};

export default Profile;
