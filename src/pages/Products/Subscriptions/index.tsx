import { Component, onMount } from 'solid-js';
import Chart from 'chart.js/auto';

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
    const ctx = document.getElementById(
      'chart-subscriptions'
    ) as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            label: 'My',
            data: Object.values(source),
            backgroundColor: [
              ChartColors.Purple,
              ChartColors.Red,
              ChartColors.Green,
              ChartColors.Blue,
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  });

  return (
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Subscriptions</h3>
      <p class='term'>
        Average share is equal to {average(Object.values(source))}%
      </p>
      <canvas id='chart-subscriptions' class='conditions'></canvas>
    </article>
  );
};

export default Subscriptions;
