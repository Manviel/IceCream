import { Component } from 'solid-js';

type RingType = {
  progress: number;
};

const Ring: Component<RingType> = (props) => {
  const { progress } = props;

  const circleRadius = 40;
  const circleCenter = 50;
  const arcLength = Math.round(2 * 3.14 * circleRadius);
  const arcOffset = Math.round(arcLength * (progress / 100));

  return (
    <div
      class='activity'
      role='progressbar'
      aria-label='Activity ring'
      aria-valuenow={progress}
    >
      <svg class='ring'>
        <circle
          class='background'
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
        />
        <circle
          class='completed'
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          stroke-dasharray={`${arcOffset}, ${arcLength}`}
        />
      </svg>
    </div>
  );
};

export default Ring;
