import { Component, onMount } from 'solid-js';
import { BarChart } from 'chartist';

import { total } from '../../../services/utils';
import { useChartSource, useLegends } from '../charts';

const source = {
  Eggs: 6.3,
  'Chicken breast': 26.7,
  'Cottage cheese': 28,
  'Greek yogurt': 19.9,
  Milk: 8.3,
  Lentils: 9,
  'Lean beef': 24.6,
  Salmon: 30.5,
  Peanuts: 7.3,
  Almonds: 5.8,
  Quinoa: 8,
  'Turkey breast': 25.6,
};

const chartID = 'chart-health';

const Health: Component = () => {
  const { labels, datasets } = useChartSource(source);
  const { legend, handleHover, getItem } = useLegends(labels, datasets);

  onMount(() => {
    new BarChart(
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
  });

  return (
    <article class='layer rounded flex col widget-chart'>
      <div class='view'>
        <h3 class='widget-title'>Health</h3>
        <p class='term'>
          Total protein is equal to {Math.round(total(datasets))}gm
        </p>
      </div>

      <div
        id={chartID}
        class='conditions widget-bar'
        role='presentation'
        aria-label='Food'
      />
      <small class='form-group'>Selected - {getItem(legend())}gm</small>
    </article>
  );
};

export default Health;
