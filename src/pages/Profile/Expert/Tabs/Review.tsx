import { Component } from 'solid-js';

import Card from '../../../../components/Card';

import Reviews from '../Reviews';

const Review: Component = () => {
  return (
    <div class='grid toolbar'>
      <Card title='Position' number={1} description='Coming Soon' />

      <Reviews />
    </div>
  );
};

export default Review;
