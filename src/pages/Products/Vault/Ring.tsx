import { Component, onMount } from 'solid-js';
import { PieChart } from 'chartist';

import { useChartSource } from '../Charts/Context';
import { IDType } from '../../../global';

interface IRing extends IDType {
  progress: number;
}

const Ring: Component<IRing> = props => {
  const { progress, id } = props;

  const source = {
    Free: progress,
    Used: 100 - progress
  };

  const { labels, datasets } = useChartSource(source);

  onMount(() => {
    const chart = new PieChart(
      `#${id}`,
      {
        series: datasets,
        labels: labels
      },
      {
        donut: true,
        donutWidth: 14,
        showLabel: false
      }
    );

    chart.on('draw', data => {
      if (data.type === 'slice') {
        const node = data.element.getNode();
        const index = data.index;

        node.setAttribute('aria-label', `${labels[index]}: ${datasets[index]}`);
      }
    });
  });

  return <figure id={id} class="activity" />;
};

export default Ring;
