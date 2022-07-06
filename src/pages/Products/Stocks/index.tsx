import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

import './Stocks.css';

const Stocks: Component = () => {
  onMount(() => {
    new Chart('#chart-stocks', {
      type: 'line',
      data: {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            name: 'AAPL',
            values: [180, 159, 172, 150, 174, 137],
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
    <div class='layer rounded flex col widget stocks'>
      <h3 class='view widget-title'>Stocks (usd value)</h3>
      <div id='chart-stocks' class='content-full' role='presentation'></div>
    </div>
  );
};

export default Stocks;
