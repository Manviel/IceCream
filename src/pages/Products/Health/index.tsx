import { Component } from 'solid-js';

import { total } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  Eggs: 6.3,
  Chicken: 26.7,
  Yogurt: 19.9,
  Milk: 8.3,
  Lentils: 9,
  'Lean beef': 24.6,
  Salmon: 30.5,
  Peanuts: 7.3,
  Almonds: 5.8,
  Quinoa: 8,
  Turkey: 25.6,
};

const chartID = 'chart-health';

const Health: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <ChartStrategy
      strategy={ChartTypes.Bar}
      id={chartID}
      title='Health'
      description={`Total protein is equal to ${Math.round(total(datasets))}gm`}
      ariaLabel='Food'
      source={source}
    />
  );
};

export default Health;
