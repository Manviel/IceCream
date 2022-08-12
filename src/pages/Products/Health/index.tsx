import { Component, onMount } from 'solid-js';
import Chart from 'chart.js/auto';

import { ChartColors } from '../../../models';
import { total } from '../../../services/utils';
import { hideGridCells } from '../frappe-charts';

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

const Health: Component = () => {
  onMount(() => {
    const ctx = document.getElementById('chart-health') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            label: 'Protein',
            borderRadius: 12,
            backgroundColor: ChartColors.Blue,
            hoverBackgroundColor: 'hsl(211, 100%, 40%)',
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
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Health</h3>
      <p class='term'>
        Total protein is equal to {Math.round(total(Object.values(source)))}gm
      </p>
      <canvas id='chart-health' class='conditions'></canvas>
    </article>
  );
};

export default Health;
