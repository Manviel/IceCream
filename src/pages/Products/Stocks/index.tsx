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
  const { handleHover } = useLegends({ labels, datasets });

  onMount(() => {
    const chart = new LineChart(
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

    chart.on('draw', (data) => {
      if (data.type === 'point') {
        const node = data.element.getNode();

        handleHover(node, data.index, '$');
      }
    });
  });

  return (
    <article class='layer rounded flex col widget-chart'>
      <div class='view'>
        <h3 class='widget-title'>Stocks</h3>
        <p class='term'>Average price is ${average(datasets)}</p>
      </div>

      <section id={chartID} class='conditions widget-line' aria-label='AAPL' />
    </article>
  );
};

export default Stocks;
