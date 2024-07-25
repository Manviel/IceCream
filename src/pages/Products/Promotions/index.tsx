import { Component } from 'solid-js';

import { sortByAsc } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  '0:00': 1,
  '2:00': 2,
  '4:00': 3,
  '6:00': 10,
  '8:00': 37,
  '10:00': 65,
  '12:00': 50,
  '14:00': 32,
  '16:00': 40,
  '18:00': 10,
  '20:00': 7,
  '22:00': 5
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
