import { For, Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import {
  AbsoluteDifferenceStrategy,
  OptionType,
  PercentageDifferenceStrategy,
  PriceDifferenceStrategy,
} from '../Strategy';
import { ProductPageFacade } from '../Facade';
import { StateType } from '../State';

import { SaveConfigurationCommand } from './Command';
import { ConfigurationHistory, ConfigurationMemento } from './Memento';

type ComparisonType = {
  productFacade: ProductPageFacade;
  selectedOptions: StateType;
  setSelectedOptions: (fn: (prev: StateType) => StateType) => void;
  options: OptionType[];
};

const ConfigHistory: Component<ComparisonType> = ({
  productFacade,
  selectedOptions,
  setSelectedOptions,
  options,
}) => {
  const [history, setHistory] = createStore<ConfigurationMemento[]>([]);
  const [priceStrategy, setPriceStrategy] = createStore({
    strategy: new PercentageDifferenceStrategy() as PriceDifferenceStrategy,
  });

  const configHistory = new ConfigurationHistory(setHistory);

  const saveConfiguration = () => {
    const command = new SaveConfigurationCommand(
      configHistory,
      () => selectedOptions
    );
    command.execute();
  };

  const loadConfiguration = (memento: ConfigurationMemento) => {
    setSelectedOptions(() => memento.getState());
  };

  const togglePriceStrategy = () => {
    setPriceStrategy('strategy', (prev) =>
      prev instanceof PercentageDifferenceStrategy
        ? new AbsoluteDifferenceStrategy()
        : new PercentageDifferenceStrategy()
    );
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const calculatePriceDifference = (config: StateType) => {
    const basePrice = productFacade.calculatePrice({});
    const comparisonPrice = productFacade.calculatePrice(config);
    return priceStrategy.strategy.calculate(basePrice, comparisonPrice);
  };

  return (
    <section>
      <h3>Product Comparison</h3>

      <button onClick={saveConfiguration}>Save Current Configuration</button>
      <button onClick={togglePriceStrategy}>
        Toggle Price Difference:{' '}
        {priceStrategy.strategy instanceof PercentageDifferenceStrategy
          ? 'Percentage'
          : 'Absolute'}
      </button>

      <For each={history}>
        {(memento) => (
          <div>
            <h3>Configuration from {formatDate(memento.getTimestamp())}</h3>
            <For each={options}>
              {(option) => (
                <div>
                  {option.name}: {memento.getState()[option.name]}
                </div>
              )}
            </For>

            <div>
              Price Difference: {calculatePriceDifference(memento.getState())}
            </div>

            <button onClick={() => loadConfiguration(memento)}>
              Load This Configuration
            </button>
          </div>
        )}
      </For>
    </section>
  );
};

export default ConfigHistory;
