import { Component } from 'solid-js';

import { ChartColors } from '../../../models';
import { sortByMaxValue } from '../../../services/utils';

const source = {
  '0:00': 1,
  '3:00': 3,
  '6:00': 13,
  '9:00': 33,
  '12:00': 29,
  '15:00': 26,
  '18:00': 22,
  '21:00': 9,
};

const chartID = 'chart-promotions';

const Promotions: Component = () => {
  const labels = Object.keys(source);
  const datasets = Object.values(source);

  const getItem = (index: number) => `${labels[index]}: ${datasets[index]}`;

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
        aria-label='Timeline'
      >
        <path
          d='M0,500  h100  v-447.8035436167326  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(0)}
          tabindex='0'
        />
        <path
          d='M125,500  h100  v-401.6639960395255  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(1)}
          tabindex='0'
        />
        <path
          d='M250,500  h100  v-396.0092170797153  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(2)}
          tabindex='0'
        />
        <path
          d='M375,500  h100  v-261.7287582907878  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(3)}
          tabindex='0'
        />
        <path
          d='M500,500  h100  v-325.27459210429555  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(4)}
          tabindex='0'
        />
        <path
          d='M625,500  h100  v-222.2916218760118  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(5)}
          tabindex='0'
        />
        <path
          d='M750,500  h100  v-53.98176712017846  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(6)}
          tabindex='0'
        />
        <path
          d='M875,500  h100  v-35.95042477428933  q0,-31 -31,-31  h-38  q-31,0 -31,31  Z'
          fill={ChartColors.Neon}
          aria-roledescription={getItem(7)}
          tabindex='0'
        />
      </svg>
    </article>
  );
};

export default Promotions;
