import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import { SubTitle } from '../../components/Header';
import AuthOutlet from '../../components/Header/AuthOutlet';

import { Pages } from '../../models';

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

      <AuthOutlet />

      <article class='grid products portfolio screen'>
        <Reviews />
      </article>
    </PageDecorator>
  );
};

export default Profile;
