import { Component } from 'solid-js';

import Card from '../../../../components/Card';
import { SubTitle } from '../../../../components/Header';

import Reviews from '../Reviews';

const Review: Component = () => (
  <section class='screen'>
    <SubTitle spot='Insights' />

    <div class='grid toolbar'>
      <Card
        title='Visually Impaired People'
        number={2.2}
        description='billion'
      />

      <Reviews />
    </div>
  </section>
);

export default Review;
