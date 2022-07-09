import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

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
