import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

import { ChartColors } from '../../../models';
import { average } from '../../../services/utils';

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
    new Chart('#chart-stocks', {
      type: 'line',
      data: {
        labels: Object.keys(source),
        datasets: [
          {
            name: 'AAPL',
            values: Object.values(source),
          },
        ],
      },
      colors: [ChartColors.Green],
      lineOptions: {
        hideDots: 1,
        regionFill: 1,
        spline: 1,
      },
      isNavigable: true,
    });
  });

  return (
    <div class='layer rounded flex col widget-chart'>
      <article class='view'>
        <h3 class='widget-title'>Stocks</h3>
        <p class='term'>
          Average price is equal to ${average(Object.values(source))}
        </p>
      </article>
      <div id='chart-stocks' class='content-full' role='presentation'></div>
    </div>
  );
};

export default Stocks;
