import { Component } from 'solid-js';

import Card from '../../../../components/Card';

import Reviews from '../Reviews';

const Review: Component = () => {
  return (
    <div class='grid toolbar'>
      <Card
        title='People in 2022'
        number={2.2}
        measure='billion'
        description='With vision impairment'
      />

      <Reviews />
    </div>
  );
};

export default Review;
