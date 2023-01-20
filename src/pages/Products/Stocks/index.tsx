import { Component, onMount } from 'solid-js';
import { LineChart } from 'chartist';

import { average } from '../../../services/utils';
import { useChartSource, useLegends } from '../charts';

const source = {
  Dec: 180,
  Jan: 159,
  Feb: 172,
  Mar: 150,
  Apr: 174,
  May: 137,
};

const chartID = 'chart-stocks';

const Stocks: Component = () => {
  const { labels, datasets } = useChartSource(source);
  const { legend, handleHover, getItem } = useLegends(labels, datasets);

  onMount(() => {
    new LineChart(
      `#${chartID}`,
      {
        labels: labels,
        series: [datasets],
      },
      {
        showArea: true,
        fullWidth: true,
        axisX: {
          showGrid: false,
        },
      }
    );
  });

  return (
    <article class='layer rounded flex col widget-chart'>
      <div class='view'>
        <h3 class='widget-title'>Stocks</h3>
        <p class='term'>Average price is ${average(datasets)}</p>
      </div>

      <div
        id={chartID}
        class='conditions widget-line'
        role='presentation'
        aria-label='AAPL'
      />
      <small class='form-group'>Selected - {getItem(legend())}$</small>
    </article>
  );
};

export default Stocks;
