import { Component, onMount, untrack } from 'solid-js';
import { BarChart } from 'chartist';

import { ChartKind } from '../Charts';
import { AXIS_OFFSET, ChartLegend, useChartSource, useLegends } from './Context';

const BarStrategy: Component<ChartKind> = props => {
  const { labels, datasets } = useChartSource(untrack(() => props.source));
  const { handleReader, legend } = useLegends({ labels, datasets });

  onMount(() => {
    const chart = new BarChart(
      `#${props.id}`,
      {
        labels: labels,
        series: datasets
      },
      {
        ...props.config,
        distributeSeries: true,
        axisX: {
          showGrid: false,
          labelOffset: {
            x: 0,
            y: 8
          }
        },
        axisY: {
          position: 'end',
          offset: AXIS_OFFSET
        }
      }
    );

    chart.on('draw', data => {
      if (data.type === 'bar') {
        const node = data.element.getNode();

        handleReader(node, data.seriesIndex);
      }
    });
  });

  return (
    <>
      <figure id={props.id} class="widget-bar" />

      <ChartLegend legend={legend} />
    </>
  );
};

export default BarStrategy;
