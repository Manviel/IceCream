import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

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
      colors: ['#DF62FF', '#fa124f', '#00e396', '#0072ea'],
      isNavigable: true,
      truncateLegends: true,
    });
  });

  return (
    <div class='layer rounded flex col widget widget-chart'>
      <h3 class='view widget-title'>Subscriptions</h3>
      <div
        id='chart-subscriptions'
        class='content-full'
        role='presentation'
      ></div>
    </div>
  );
};

export default Subscriptions;
