import { Component } from 'solid-js';

import { SubTitle } from '../../../../components/Header';

import Reviews from '../Reviews';

const Review: Component = () => (
  <article class='screen'>
    <SubTitle spot='Insights' />

    <p class='info'>2.2 Billion Visually Impaired People in 2022.</p>

    <div class='grid products portfolio'>
      <Reviews />
    </div>
  </article>
);

export default Review;
