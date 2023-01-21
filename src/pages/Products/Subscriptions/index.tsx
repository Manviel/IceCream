import { Component, onMount } from 'solid-js';
import { LineChart } from 'chartist';

import { average } from '../../../services/utils';
import { useChartSource, useLegends } from '../charts';

const source = {
  Ipsy: 10,
  Birchbox: 10,
  Netflix: 19.9,
  Hulu: 6.9,
  'Blue Apron': 8.7,
  'Amazon Prime': 5.9,
  Spotify: 4.9,
  'Apple Music': 9.9,
  'Apple TV+': 4.9,
  'Youtube Premium': 11.9,
  'Hello Fresh': 9.9,
  'HBO Max': 14.9,
};

const chartID = 'chart-subscriptions';

const Subscriptions: Component = () => {
  const { labels, datasets } = useChartSource(source);
  const { handleHover, getItem } = useLegends({ labels, datasets });

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
        <h3 class='widget-title'>Subscriptions</h3>
        <p class='term'>Average fee is ${Math.round(average(datasets))}</p>
      </div>

      <section
        id={chartID}
        class='conditions widget-line'
        aria-label='Services'
      />
    </article>
  );
};

export default Subscriptions;
