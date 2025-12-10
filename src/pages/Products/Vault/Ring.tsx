import { Component, onMount, untrack } from 'solid-js';
import { PieChart } from 'chartist';

import { useChartSource } from '../Charts/Context';
import { IDType } from '../../../global';

interface IRing extends IDType {
  progress: number;
}

const Ring: Component<IRing> = props => {
  const source = untrack(() => ({
    Free: props.progress,
    Used: 100 - props.progress
  }));

  const { labels, datasets } = useChartSource(source);

  onMount(() => {
    const chart = new PieChart(
      `#${props.id}`,
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

  return <figure id={props.id} class="activity" />;
};

export default Ring;
