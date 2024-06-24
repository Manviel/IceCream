import { For, Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import {
  AbsoluteDifferenceStrategy,
  OptionType,
  PercentageDifferenceStrategy,
  PriceDifferenceStrategy,
} from '../Strategy';
import { ProductPageFacade } from '../Facade';

import { SaveConfigurationCommand } from './Command';
import { ConfigurationHistory, ConfigurationMemento } from './Memento';

type ComparisonType = {
  productFacade: ProductPageFacade;
  selectedOptions: Record<string, string | number>;
  setSelectedOptions: (
    fn: (
      prev: Record<string, string | number>
    ) => Record<string, string | number>
  ) => void;
  options: OptionType[];
};

const ConfigHistory: Component<ComparisonType> = ({
  productFacade,
  selectedOptions,
  setSelectedOptions,
  options,
}) => {
  const [history, setHistory] = createStore<ConfigurationMemento[]>([]);
  const configHistory = new ConfigurationHistory(setHistory);
  const [priceStrategy, setPriceStrategy] = createStore({
    strategy: new PercentageDifferenceStrategy() as PriceDifferenceStrategy,
  });

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

  const calculatePriceDifference = (
    config: Record<string, string | number>
  ) => {
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
