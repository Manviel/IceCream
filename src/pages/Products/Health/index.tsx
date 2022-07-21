import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

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

const Health: Component = () => {
  onMount(() => {
    new Chart('#chart-health', {
      type: 'bar',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            values: Object.values(source),
          },
        ],
      },
      colors: [ChartColors.Blue],
      isNavigable: true,
    });
  });

  return (
    <div class='layer rounded flex col widget widget-chart'>
      <article class='view'>
        <h3 class='widget-title'>Health</h3>
        <p class='term'>
          Total protein {Math.round(total(Object.values(source)))} grams
        </p>
      </article>
      <div id='chart-health' class='content-full' role='presentation'></div>
    </div>
  );
};

export default Health;
