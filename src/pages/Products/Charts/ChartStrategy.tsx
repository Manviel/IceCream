import { Component } from 'solid-js';

import { SegregationType } from '../../../models';
import { ChartTypes, ChartIDType } from '.';

import BarStrategy from './BarStrategy';
import LineStrategy from './LineStrategy';

interface ChartStrategyType extends SegregationType, ChartIDType {
  strategy: ChartTypes;
  ariaLabel: string;
  isDark?: boolean;
}

const ChartStrategy: Component<ChartStrategyType> = (props) => {
  const {
    title,
    description,
    id,
    strategy,
    ariaLabel,
    source,
    isDark = false,
  } = props;

  return (
    <section
      class='rounded flex col widget-chart'
      classList={{ box: isDark, card: !isDark }}
      aria-label={ariaLabel}
    >
      <div class='view'>
        <h3 class='widget-title'>{title}</h3>
        <p
          class='term'
          classList={{ 'grey-dark': isDark, 'grey-light': !isDark }}
        >
          {description}
        </p>
      </div>

      {strategy === ChartTypes.Bar && <BarStrategy id={id} source={source} />}

      {strategy === ChartTypes.Line && <LineStrategy id={id} source={source} />}
    </section>
  );
};

export default ChartStrategy;
