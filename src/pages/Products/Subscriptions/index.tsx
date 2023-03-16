import { Component } from 'solid-js';

import { average } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  '2012': 25.71,
  '2013': 35.63,
  '2014': 47.99,
  '2015': 62.71,
  '2016': 79.9,
  '2017': 99.04,
  '2018': 124.35,
  '2019': 151.56,
  '2020': 192.95,
  '2021': 209,
  '2022': 220.6,
};

const chartID = 'chart-subscriptions';

const Subscriptions: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <ChartStrategy
      strategy={ChartTypes.Line}
      id={chartID}
      title='Subscribers'
      description={`Average annual number is ${Math.round(
        average(datasets)
      )} million`}
      ariaLabel='Netflix'
      source={source}
    />
  );
};

export default Subscriptions;
