import { Component, onMount } from 'solid-js';
import { BarChart } from 'chartist';

import { ChartIDType } from '../Charts';
import { useChartSource, useLegends } from './Context';

const BarStrategy: Component<ChartIDType> = (props) => {
  const { id, source } = props;

  const { labels, datasets } = useChartSource(source);
  const { handleHover } = useLegends({ labels, datasets });

  onMount(() => {
    const chart = new BarChart(
      `#${id}`,
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

        handleHover(node, data.seriesIndex);
      }
    });
  });

  return <figure id={id} class='widget-bar' />;
};

export default BarStrategy;
