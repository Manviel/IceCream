import { Component } from 'solid-js';

import { SubTitle } from '../../../../components/Header';

import Reviews from '../Reviews';
import Toolbar from './Toolbar';

const Review: Component = () => (
  <article class='screen'>
    <div class='flex items-center justify-between'>
      <SubTitle spot='Insights' />

      <Toolbar />
    </div>

    <p class='info'>2.2 Billion Visually Impaired People in 2022.</p>

    <div class='grid products portfolio'>
      <Reviews />
    </div>
  </article>
);

export default Review;
