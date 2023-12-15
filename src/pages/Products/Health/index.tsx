import { Component } from 'solid-js';

import { total } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  Eggs: 6.3,
  Milk: 8.3,
  Yogu: 19.9,
  Chic: 26.7,
  Salm: 30.5,
};

const chartID = 'chart-health';

const Health: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <ChartStrategy
      strategy={ChartTypes.Bar}
      id={chartID}
      title='Health'
      description={`Total protein is equal to ${Math.round(
        total(datasets)
      )} gm`}
      ariaLabel='Food'
      source={source}
      config={{
        horizontalBars: true,
      }}
    />
  );
};

export default Health;
