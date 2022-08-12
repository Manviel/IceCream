import { Component, onMount } from 'solid-js';
import Chart from 'chart.js/auto';

import { ChartColors } from '../../../models';
import { average } from '../../../services/utils';
import { BAR_RADIUS, hideGridCells } from '../frappe-charts';

const source = {
  Spotify: 165,
  'Apple Music': 88,
  Amazon: 68,
  Youtube: 50,
};

const chartID = 'chart-subscriptions';

const Subscriptions: Component = () => {
  onMount(() => {
    const ctx = document.getElementById(chartID) as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            label: 'Million',
            borderRadius: BAR_RADIUS,
            backgroundColor: ChartColors.Purple,
            hoverBackgroundColor: 'hsl(276, 77%, 45%)',
            data: Object.values(source),
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: hideGridCells,
      },
    });
  });

  return (
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Subscriptions</h3>
      <p class='term'>
        Average amount of people is {average(Object.values(source))} M
      </p>
      <canvas id={chartID} class='conditions'></canvas>
    </article>
  );
};

export default Subscriptions;
