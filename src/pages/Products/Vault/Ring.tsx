import { Component, onMount } from 'solid-js';
import { PieChart } from 'chartist';

import { useChartSource } from '../Charts/Context';
import { IDType } from '../../../models';

interface RingType extends IDType {
  progress: number;
}

const Ring: Component<RingType> = (props) => {
  const { progress, id } = props;

  const source = {
    Used: 100 - progress,
    Free: progress,
  };

  const { labels, datasets } = useChartSource(source);

  onMount(() => {
    const chart = new PieChart(
      `#${id}`,
      {
        series: datasets,
        labels: labels,
      },
      {
        donut: true,
        donutWidth: 14,
        showLabel: false,
      }
    );

    chart.on('draw', (data) => {
      if (data.type === 'slice') {
        const node = data.element.getNode();
        const index = data.index;

        node.setAttribute('aria-label', `${labels[index]}: ${datasets[index]}`);
      }
    });
  });

  return <figure id={id} class='activity' />;
};

export default Ring;
