import { Component } from 'solid-js';

import { average } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  Whisper: 30,
  Conversation: 60,
  WashingMachine: 70,
  Traffic: 80,
  Motorcycle: 95,
  SubwayTrain: 100,
  LoudStereo: 110,
};

const chartID = 'chart-health';

const Health: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <ChartStrategy
      strategy={ChartTypes.Bar}
      id={chartID}
      title='Volume'
      description={`Average noise is ${average(datasets).toFixed(2)} dB`}
      ariaLabel='Levels'
      source={source}
      config={{
        low: 20,
      }}
    />
  );
};

export default Health;
