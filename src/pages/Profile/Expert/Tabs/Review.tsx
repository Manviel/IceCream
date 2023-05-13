import { Component } from 'solid-js';

import Card from '../../../../components/Card';
import { SubTitle } from '../../../../components/Header';

import Reviews from '../Reviews';

const Review: Component = () => (
  <>
    <SubTitle spot='Overview' />
    <div class='grid toolbar'>
      <Card
        title='People in 2022'
        number={2.2}
        measure='billion'
        description='With vision impairment'
      />

      <Reviews />
    </div>
  </>
);

export default Review;
