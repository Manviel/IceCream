import { Component, onMount } from 'solid-js';
import { LineChart } from 'chartist';

import { ChartIDType } from '../Charts';
import { useChartSource, useLegends } from './Context';

const LineStrategy: Component<ChartIDType> = (props) => {
  const { id, source } = props;

  const { labels, datasets } = useChartSource(source);
  const { handleHover } = useLegends({ labels, datasets });

  onMount(() => {
    const chart = new LineChart(
      `#${id}`,
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

        handleHover(node, data.index);
      }
    });
  });

  return <figure id={id} class='widget-line' />;
};

export default LineStrategy;
