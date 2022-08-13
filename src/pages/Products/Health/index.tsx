import { Component } from 'solid-js';

import { ChartColors } from '../../../models';
import { total } from '../../../services/utils';

const source = {
  Eggs: 6.3,
  'Chicken breast': 26.7,
  'Cottage cheese': 28,
  'Greek yogurt': 19.9,
  Milk: 8.3,
  Lentils: 9,
  'Lean beef': 24.6,
  Salmon: 30.5,
  Peanuts: 7.3,
  Almonds: 5.8,
  Quinoa: 8,
  'Turkey breast': 25.6,
};

const chartID = 'chart-health';

const Health: Component = () => {
  return (
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Health</h3>
      <p class='term'>
        Total protein is equal to {Math.round(total(Object.values(source)))}gm
      </p>
      <svg
        id={chartID}
        class='conditions'
        viewBox='0 0 1000 500'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0,500  h66.66666666666667  v-133.62126505669505  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M83.33333333333333,500  h66.66666666666667  v-249.43759726684482  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M166.66666666666666,500  h66.66666666666667  v-398.82644132630287  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M250,500  h66.66666666666667  v-145.98366124365396  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M333.3333333333333,500  h66.66666666666667  v-93.4333588271569  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M416.66666666666663,500  h66.66666666666667  v-189.4033703641701  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M500,500  h66.66666666666667  v-338.84927559724036  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M583.3333333333333,500  h66.66666666666667  v-304.09090325227965  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M666.6666666666666,500  h66.66666666666667  v-132.02546412539272  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M750,500  h66.66666666666667  v-265.94465933106494  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M833.3333333333333,500  h66.66666666666667  v-105.10322343481505  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
        <path
          d='M916.6666666666666,500  h66.66666666666667  v-283.3363297377476  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
        />
      </svg>
    </article>
  );
};

export default Health;
