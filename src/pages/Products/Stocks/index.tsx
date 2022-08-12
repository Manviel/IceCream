import { Component, onMount } from 'solid-js';
import Chart from 'chart.js/auto';

import { ChartColors } from '../../../models';
import { average } from '../../../services/utils';
import { hideGridCells } from '../frappe-charts';

const source = {
  Dec: 180,
  Jan: 159,
  Feb: 172,
  Mar: 150,
  Apr: 174,
  May: 137,
};

const Stocks: Component = () => {
  onMount(() => {
    const ctx = document.getElementById('chart-stocks') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            label: 'AAPL',
            fill: true,
            borderColor: ChartColors.Green,
            backgroundColor: 'hsl(160, 100%, 76%)',
            hoverBackgroundColor: 'hsl(160, 100%, 30%)',
            data: Object.values(source),
          },
        ],
      },
      options: {
        elements: {
          line: {
            tension: 0.3,
          },
        },
        scales: hideGridCells,
      },
    });
  });

  return (
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Stocks</h3>
      <p class='term'>
        Average price is equal to ${average(Object.values(source))}
      </p>
      <canvas id='chart-stocks' class='conditions'></canvas>
    </article>
  );
};

export default Stocks;
