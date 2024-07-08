import { Component } from 'solid-js';

import { sortByAsc } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  '0:00': 1,
  '3:00': 3,
  '6:00': 13,
  '9:00': 33,
  '12:00': 29,
  '15:00': 26,
  '18:00': 22,
  '21:00': 9
};

const chartID = 'chart-promotions';

const sortByMaxValue = (obj: object, pos: number) => sortByAsc(obj)[pos];

const Promotions: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <ChartStrategy
      isDark
      strategy={ChartTypes.Bar}
      id={chartID}
      title="Promotions"
      description={`Peak hours from ${sortByMaxValue(source, datasets.length - 1)[0]} to 
        ${sortByMaxValue(source, datasets.length - 2)[0]}`}
      ariaLabel="Timeline"
      source={source}
    />
  );
};

export default Promotions;
