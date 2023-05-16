import { Component } from 'solid-js';

import Card from '../../../../components/Card';
import { SubTitle } from '../../../../components/Header';

import Reviews from '../Reviews';

const Review: Component = () => (
  <>
    <SubTitle spot='Overview' />
    <div class='grid toolbar'>
      <Card
        title='Visually Impaired People'
        number={2.2}
        description='billion'
      />

      <Reviews />
    </div>
  </>
);

export default Review;
