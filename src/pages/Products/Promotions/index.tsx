import { Component, onMount } from 'solid-js';
import Chart from 'chart.js/auto';

import { ChartColors } from '../../../models';
import { hideGridCells } from '../frappe-charts';

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
    const ctx = document.getElementById(
      'chart-promotions'
    ) as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            label: 'Percentage',
            borderRadius: 12,
            backgroundColor: ChartColors.Neon,
            hoverBackgroundColor: 'hsl(150, 96%, 32%)',
            data: Object.values(source),
          },
        ],
      },
      options: {
        scales: hideGridCells,
      },
    });
  });

  return (
    <article class='box view rounded flex col widget-chart'>
      <h3 class='widget-title'>Promotions</h3>
      <p class='term grey'>Productive hours of the day</p>

      <canvas id='chart-promotions' class='conditions'></canvas>
    </article>
  );
};

export default Promotions;
