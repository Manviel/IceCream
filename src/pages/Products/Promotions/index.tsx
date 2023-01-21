import { Component, onMount } from 'solid-js';
import { BarChart } from 'chartist';

import { sortByAsc } from '../../../services/utils';
import { useChartSource, useLegends } from '../charts';

const source = {
  '0:00': 1,
  '3:00': 3,
  '6:00': 13,
  '9:00': 33,
  '12:00': 29,
  '15:00': 26,
  '18:00': 22,
  '21:00': 9,
};

const chartID = 'chart-promotions';

const sortByMaxValue = (obj: {}, pos: number) => sortByAsc(obj)[pos];

const Promotions: Component = () => {
  const { labels, datasets } = useChartSource(source);
  const { handleHover } = useLegends({ labels, datasets });

  onMount(() => {
    const chart = new BarChart(
      `#${chartID}`,
      {
        labels: labels,
        series: datasets,
      },
      {
        distributeSeries: true,
        axisX: {
          showGrid: false,
        },
      }
    );

    chart.on('draw', (data) => {
      if (data.type === 'bar') {
        const node = data.element.getNode();

        handleHover(node, data.seriesIndex, '%');
      }
    });
  });

  return (
    <article class='box rounded flex col widget-chart'>
      <div class='view'>
        <h3 class='widget-title'>Promotions</h3>
        <p class='term grey'>
          Most productive hours from{' '}
          {sortByMaxValue(source, datasets.length - 1)[0]} to{' '}
          {sortByMaxValue(source, datasets.length - 2)[0]}
        </p>
      </div>

      <section
        id={chartID}
        class='conditions widget-bar'
        aria-label='Timeline'
      />
    </article>
  );
};

export default Promotions;
