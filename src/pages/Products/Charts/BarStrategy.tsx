import { Component, onMount } from 'solid-js';
import { BarChart } from 'chartist';

import { ChartIDType } from '../Charts';
import { ChartLegend, useChartSource, useLegends } from './Context';

const BarStrategy: Component<ChartIDType> = (props) => {
  const { id, source } = props;

  const { labels, datasets } = useChartSource(source);
  const { handleReader, legend } = useLegends({ labels, datasets });

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
          labelOffset: {
            x: 0,
            y: 8,
          },
        },
      }
    );

    chart.on('draw', (data) => {
      if (data.type === 'bar') {
        const node = data.element.getNode();

        handleReader(node, data.seriesIndex);
      }
    });
  });

  return (
    <>
      <figure id={id} class='widget-bar' />

      <ChartLegend legend={legend} />
    </>
  );
};

export default BarStrategy;
