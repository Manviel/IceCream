import { Component, onMount } from 'solid-js';
import { PieChart } from 'chartist';

type RingType = {
  progress: number;
};

const id = 'activity-ring';

const Ring: Component<RingType> = (props) => {
  const { progress } = props;

  const completed = 100 - progress;

  onMount(() => {
    new PieChart(
      `#${id}`,
      {
        series: [completed, progress],
      },
      {
        donut: true,
        donutWidth: 13,
        showLabel: false,
      }
    );
  });

  return <figure id={id} class='activity' />;
};

export default Ring;
