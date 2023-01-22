import { Component } from 'solid-js';

import { average } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  Ipsy: 10,
  Birchbox: 10,
  Netflix: 19.9,
  Hulu: 6.9,
  'Blue Apron': 8.7,
  'Amazon Prime': 5.9,
  Spotify: 4.9,
  'Apple Music': 9.9,
  'Apple TV+': 4.9,
  'Youtube Premium': 11.9,
  'Hello Fresh': 9.9,
  'HBO Max': 14.9,
};

const chartID = 'chart-subscriptions';

const Subscriptions: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <ChartStrategy
      isDark={false}
      strategy={ChartTypes.Line}
      id={chartID}
      title='Subscriptions'
      description={`Average fee is $${Math.round(average(datasets))}`}
      ariaLabel='Services'
      source={source}
    />
  );
};

export default Subscriptions;
