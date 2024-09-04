import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import { SubTitle } from '../../components/Header';
import AuthOutlet from '../../components/Header/AuthOutlet';

import { Pages } from '../../global';

import Expert from './Expert';
import Reviews from './Expert/Reviews';
import Results from './Expert/Results';

const Profile: Component = () => {
  return (
    <PageDecorator headline={Pages.Profile} subtitle="Overview" isDark>
      <Expert />

      <header class="flex items-center justify-between screen">
        <SubTitle spot="Insights" />

        <Results />
      </header>

      <p class="info">A McKinsey study found that unicorn startups had an Average Annual Return of 30% over 10 years.</p>

      <AuthOutlet />

      <Reviews />
    </PageDecorator>
  );
};

export default Profile;
