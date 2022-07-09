import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

const Health: Component = () => {
  onMount(() => {
    new Chart('#chart-health', {
      type: 'bar',
      data: {
        labels: [
          'Eggs',
          'Chicken breast',
          'Cottage cheese',
          'Greek yogurt',
          'Milk',
          'Lentils',
          'Lean beef',
          'Salmon',
          'Peanuts',
        ],
        datasets: [
          {
            values: [6.3, 26.7, 28, 19.9, 8.3, 9, 24.6, 30.5, 7.3],
          },
        ],
      },
      colors: ['#008FFB'],
      isNavigable: true,
    });
  });

  return (
    <div class='layer rounded flex col widget widget-chart'>
      <h3 class='view widget-title'>Health (grams of protein)</h3>
      <div id='chart-health' class='content-full' role='presentation'></div>
    </div>
  );
};

export default Health;
