import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

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
      colors: ['#00e396'],
      lineOptions: {
        hideDots: 1,
        regionFill: 1,
        spline: 1,
      },
      isNavigable: true,
    });
  });

  return (
    <div class='layer rounded flex col widget widget-chart'>
      <h3 class='view widget-title'>Stocks (value in usd)</h3>
      <div id='chart-stocks' class='content-full' role='presentation'></div>
    </div>
  );
};

export default Stocks;
