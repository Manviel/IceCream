import { Component } from 'solid-js';

import { average } from '../../../services/utils';

import { ChartTypes } from '../Charts';
import { useChartSource } from '../Charts/Context';
import ChartStrategy from '../Charts/ChartStrategy';

const source = {
  Dec: 180,
  Jan: 159,
  Feb: 172,
  Mar: 150,
  Apr: 174,
  May: 137,
};

const chartID = 'chart-stocks';

const Stocks: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <ChartStrategy
      strategy={ChartTypes.Line}
      id={chartID}
      title='Stocks'
      description={`Average price is $${average(datasets)}`}
      ariaLabel='AAPL'
      source={source}
    />
  );
};

export default Stocks;
