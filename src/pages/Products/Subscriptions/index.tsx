import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

import { ChartColors } from '../../../models';
import { average } from '../../../services/utils';

const source = {
  'House, Transport and Food': 54.8,
  'Clothes and Personal': 14.5,
  'Entertainment and Fitness': 15.4,
  Save: 15.3,
};

const Subscriptions: Component = () => {
  onMount(() => {
    new Chart('#chart-subscriptions', {
      type: 'donut',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            values: Object.values(source),
          },
        ],
      },
      colors: [
        ChartColors.Purple,
        ChartColors.Red,
        ChartColors.Green,
        ChartColors.Blue,
      ],
      isNavigable: true,
      truncateLegends: true,
    });
  });

  return (
    <div class='layer rounded flex col widget widget-chart'>
      <article class='view'>
        <h3 class='widget-title'>Subscriptions</h3>
        <p class='term'>
          Average share is equal to {average(Object.values(source))}%
        </p>
      </article>
      <div
        id='chart-subscriptions'
        class='content-full'
        role='presentation'
      ></div>
    </div>
  );
};

export default Subscriptions;
