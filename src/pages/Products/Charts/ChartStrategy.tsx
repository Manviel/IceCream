import { Component } from 'solid-js';

import { IDarkTheme, ISegregation } from '../../../global';
import { ChartTypes, ChartKind } from '.';

import BarStrategy from './BarStrategy';
import LineStrategy from './LineStrategy';

import 'chartist/dist/index.css';

interface IChartStrategy extends ISegregation<string>, ChartKind, IDarkTheme {
  strategy: ChartTypes;
  ariaLabel: string;
}

const ChartStrategy: Component<IChartStrategy> = props => {
  return (
    <section
      class="rounded flex col widget-chart"
      classList={{ box: props.isDark, card: !props.isDark }}
      aria-label={props.ariaLabel}
    >
      <header class="view flex col tab">
        <h3 class="card-sub">{props.title}</h3>
        <p class="term" classList={{ 'grey-dark': props.isDark, 'grey-light': !props.isDark }}>
          {props.description}
        </p>
      </header>

      {props.strategy === ChartTypes.Bar && <BarStrategy id={props.id} source={props.source} config={props.config} />}

      {props.strategy === ChartTypes.Line && <LineStrategy id={props.id} source={props.source} />}
    </section>
  );
};

export default ChartStrategy;
