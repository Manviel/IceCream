import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

import { ChartColors } from '../../../models';

const source = {
  '0:00': 1,
  '4:00': 3,
  '8:00': 33,
  '12:00': 29,
  '16:00': 25,
  '20:00': 9,
};

const Promotions: Component = () => {
  onMount(() => {
    new Chart('#chart-promotions', {
      type: 'bar',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            values: Object.values(source),
          },
        ],
      },
      colors: [ChartColors.Neon],
      isNavigable: true,
    });
  });

  return (
    <div class='box rounded flex col widget-chart'>
      <article class='view'>
        <h3 class='widget-title'>Promotions</h3>
        <p class='term grey'>Productive hours of the day</p>
      </article>
      <div id='chart-promotions' class='content-full' role='presentation'></div>
    </div>
  );
};

export default Promotions;
