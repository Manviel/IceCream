import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

const Subscriptions: Component = () => {
  onMount(() => {
    new Chart('#chart-subscriptions', {
      type: 'pie',
      data: {
        labels: [
          'House, Transport and Food',
          'Clothes and Personal',
          'Entertainment and Fitness',
          'Save',
        ],
        datasets: [
          {
            values: [54.8, 14.5, 15.4, 15.3],
          },
        ],
      },
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
