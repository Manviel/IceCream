import { For, Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

import { ActionTypes } from '../../../models/config';
import { getGroup } from '../../../models/theme';

import Tooltip from '../../../components/Tooltip';

import WandStarsIcon from '../../../assets/icons/wand-stars.svg';

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

const INIT_HELP = 'Load this configuration';

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
  const [snackbar, setSnackbar] = createSignal<string>(INIT_HELP);

  const configHistory = new ConfigurationHistory(setHistory);

  const saveConfiguration = () => {
    const command = new SaveConfigurationCommand(
      configHistory,
      () => selectedOptions
    );
    command.execute();
  };

  const loadConfiguration = async (memento: ConfigurationMemento) => {
    setSelectedOptions(() => memento.getState());

    setSnackbar('Done');
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
      <h3 class="subtitle">Product Comparison</h3>
      <p class="info">History of configurations</p>

      <header class="flex justify-between">
        <button
          type="button"
          onClick={saveConfiguration}
          class={ActionTypes.Contained}
        >
          Save
        </button>

        <div class="flex items-center proximity">
          <p class="concise grey-light">Price Difference in:</p>

          <button
            type="button"
            onClick={togglePriceStrategy}
            class={ActionTypes.Secondary}
          >
            {priceStrategy.strategy instanceof PercentageDifferenceStrategy
              ? '%'
              : '$'}
          </button>
        </div>
      </header>

      <For each={history}>
        {(memento) => (
          <article class="provision">
            <h4 class="card-sub">Configuration from</h4>
            <p class="term grey-light">{formatDate(memento.getTimestamp())}</p>

            <ul class="info view layer rounded">
              <For each={options}>
                {(option) => (
                  <li>
                    {option.name}: {memento.getState()[option.name]}
                  </li>
                )}
              </For>
            </ul>

            <div class={getGroup('ghost items-end')}>
              <div class="flex col lockup">
                <p class="concise">Price Difference:</p>
                <h4 class="subtitle">
                  {calculatePriceDifference(memento.getState())}
                </h4>
              </div>

              <Tooltip
                name="Apply"
                onClick={() => loadConfiguration(memento)}
                snackbar={snackbar}
              >
                <WandStarsIcon />
              </Tooltip>
            </div>
          </article>
        )}
      </For>
    </section>
  );
};

export default ConfigHistory;
