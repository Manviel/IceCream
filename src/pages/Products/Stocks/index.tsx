import { Component, onMount } from 'solid-js';
import { Chart } from 'frappe-charts';

import './Stocks.css';

const Stocks: Component = () => {
  const data = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        name: 'AAPL',
        chartType: 'line',
        values: [180, 159, 172, 150, 174, 137],
      },
    ],
  };

  onMount(() => {
    new Chart('#chart', {
      data: data,
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
    <button class='layer rounded flex col widget stocks'>
      <div id='chart' class='content-full'></div>
    </button>
  );
};

export default Stocks;
