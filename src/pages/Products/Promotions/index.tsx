import { Component } from 'solid-js';

import { ChartColors } from '../../../models';
import { sortByMaxValue } from '../../../services/utils';

const source = {
  '0:00': 1,
  '4:00': 3,
  '8:00': 33,
  '12:00': 29,
  '16:00': 25,
  '20:00': 9,
};

const chartID = 'chart-promotions';

const Promotions: Component = () => {
  return (
    <article class='box view rounded flex col widget-chart'>
      <h3 class='widget-title'>Promotions</h3>
      <p class='term grey'>
        Most productive hours from {sortByMaxValue(source, 0)[0]} to{' '}
        {sortByMaxValue(source, 1)[0]}
      </p>

      <svg
        id={chartID}
        class='conditions'
        viewBox='0 0 1000 500'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0,500  h100  v-447.8035436167326  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
        <path
          d='M125,500  h100  v-401.6639960395255  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
        <path
          d='M250,500  h100  v-396.0092170797153  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
        <path
          d='M375,500  h100  v-261.7287582907878  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
        <path
          d='M500,500  h100  v-325.27459210429555  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
        <path
          d='M625,500  h100  v-222.2916218760118  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
        <path
          d='M750,500  h100  v-53.98176712017846  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
        <path
          d='M875,500  h100  v-35.95042477428933  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
        />
      </svg>
    </article>
  );
};

export default Promotions;
