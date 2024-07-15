import { Component } from 'solid-js';

import { DarkThemeType, SegregationType } from '../../../global';
import { ChartTypes, ChartIDType } from '.';

import BarStrategy from './BarStrategy';
import LineStrategy from './LineStrategy';

import 'chartist/dist/index.css';

interface ChartStrategyType extends SegregationType, ChartIDType, DarkThemeType {
  strategy: ChartTypes;
  ariaLabel: string;
}

const ChartStrategy: Component<ChartStrategyType> = props => {
  const { title, description, id, strategy, ariaLabel, source, isDark = false, config } = props;

  return (
    <section
      class="rounded flex col widget-chart"
      classList={{ box: isDark, card: !isDark }}
      aria-label={ariaLabel}
    >
      <header class="view flex col tab">
        <h3 class="card-sub">{title}</h3>
        <p class="term" classList={{ 'grey-dark': isDark, 'grey-light': !isDark }}>
          {description}
        </p>
      </header>

      {strategy === ChartTypes.Bar && <BarStrategy id={id} source={source} config={config} />}

      {strategy === ChartTypes.Line && <LineStrategy id={id} source={source} />}
    </section>
  );
};

export default ChartStrategy;
