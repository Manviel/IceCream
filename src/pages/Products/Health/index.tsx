import { Component } from 'solid-js';

import { ChartColors } from '../../../models';
import { total } from '../../../services/utils';
import { useChartSource, useLegends } from '../charts';

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
  const { labels, datasets } = useChartSource(source);
  const { legend, handleHover, getItem } = useLegends(labels, datasets);

  return (
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Health</h3>
      <p class='term'>
        Total protein is equal to {Math.round(total(datasets))}gm
      </p>
      <svg
        id={chartID}
        class='conditions widget-bar'
        viewBox='0 0 1000 500'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Food'
      >
        <path
          d='M0,500  h66.66666666666667  v-133.62126505669505  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(0)}
          tabindex='0'
          onMouseEnter={() => handleHover(0)}
          onFocus={() => handleHover(0)}
        />
        <path
          d='M83.33333333333333,500  h66.66666666666667  v-249.43759726684482  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(1)}
          tabindex='0'
          onMouseEnter={() => handleHover(1)}
          onFocus={() => handleHover(1)}
        />
        <path
          d='M166.66666666666666,500  h66.66666666666667  v-398.82644132630287  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(2)}
          tabindex='0'
          onMouseEnter={() => handleHover(2)}
          onFocus={() => handleHover(2)}
        />
        <path
          d='M250,500  h66.66666666666667  v-145.98366124365396  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(3)}
          tabindex='0'
          onMouseEnter={() => handleHover(3)}
          onFocus={() => handleHover(3)}
        />
        <path
          d='M333.3333333333333,500  h66.66666666666667  v-93.4333588271569  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(4)}
          tabindex='0'
          onMouseEnter={() => handleHover(4)}
          onFocus={() => handleHover(4)}
        />
        <path
          d='M416.66666666666663,500  h66.66666666666667  v-189.4033703641701  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(5)}
          tabindex='0'
          onMouseEnter={() => handleHover(5)}
          onFocus={() => handleHover(5)}
        />
        <path
          d='M500,500  h66.66666666666667  v-338.84927559724036  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(6)}
          tabindex='0'
          onMouseEnter={() => handleHover(6)}
          onFocus={() => handleHover(6)}
        />
        <path
          d='M583.3333333333333,500  h66.66666666666667  v-304.09090325227965  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(7)}
          tabindex='0'
          onMouseEnter={() => handleHover(7)}
          onFocus={() => handleHover(7)}
        />
        <path
          d='M666.6666666666666,500  h66.66666666666667  v-132.02546412539272  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(8)}
          tabindex='0'
          onMouseEnter={() => handleHover(8)}
          onFocus={() => handleHover(8)}
        />
        <path
          d='M750,500  h66.66666666666667  v-265.94465933106494  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(9)}
          tabindex='0'
          onMouseEnter={() => handleHover(9)}
          onFocus={() => handleHover(9)}
        />
        <path
          d='M833.3333333333333,500  h66.66666666666667  v-105.10322343481505  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(10)}
          tabindex='0'
          onMouseEnter={() => handleHover(10)}
          onFocus={() => handleHover(10)}
        />
        <path
          d='M916.6666666666666,500  h66.66666666666667  v-283.3363297377476  q0,-21 -21,-21  h-24.66666666666667  q-21,0 -21,21  Z'
          fill={ChartColors.Blue}
          aria-roledescription={getItem(11)}
          tabindex='0'
          onMouseEnter={() => handleHover(11)}
          onFocus={() => handleHover(11)}
        />
      </svg>
      <small class='conditions'>Selected - {getItem(legend())}gm</small>
    </article>
  );
};

export default Health;
