import { Component, createSignal, createMemo, Show } from 'solid-js';
import { createStore } from 'solid-js/store';

import PageDecorator from '../../components/PageDecorator';

import LayersDownIcon from '../../assets/icons/layers-down.svg';

import { Pages } from '../../models';
import { ShapeIcon, getStack } from '../../models/theme';

import { ProductComponent, CompositeProduct } from './Composite';
import { withDiscount } from './Decorator';
import {
  LegacyPriceCalculator,
  PriceCalculatorAdapter,
  Tiers,
} from './Adapter';
import { ProductPageFacade } from './Facade';
import { ListProductView, GridProductView } from './Bridge';
import {
  OptionSelector,
  OptionType,
  NumericOption,
  TextOption,
} from './Strategy';

import './Bag.css';

enum Scenes {
  List = 'list',
  Grid = 'grid',
}

const Bag: Component = () => {
  const [selectedOptions, setSelectedOptions] = createStore({});
  const [viewType, setViewType] = createSignal<Scenes>(Scenes.List);

  const baseLaptop = new ProductComponent('Base Laptop', 1000);
  const ram = new ProductComponent('16GB RAM', 100);
  const ssd = new ProductComponent('512GB SSD', 150);

  const laptop = new CompositeProduct('Customized Laptop');

  laptop.add(baseLaptop);
  laptop.add(ram);
  laptop.add(ssd);

  const discountedLaptop = withDiscount(laptop, 0.1);

  const legacyCalculator = new LegacyPriceCalculator();
  const priceCalculator = new PriceCalculatorAdapter(legacyCalculator);

  const productFacade = new ProductPageFacade(
    discountedLaptop,
    priceCalculator
  );

  const totalPrice = createMemo(() =>
    productFacade.calculatePrice(selectedOptions)
  );

  const productOptions: OptionType[] = [
    NumericOption('RAM', [4, 8, 16, 32]),
    NumericOption('Storage', [256, 512, 1024]),
    TextOption('CPU', [Tiers.Entry, Tiers.Mid, Tiers.High]),
  ];

  const handleViewChange = () =>
    setViewType((v) => (v === Scenes.List ? Scenes.Grid : Scenes.List));

  return (
    <PageDecorator headline={Pages.Bag} subtitle='Endless potential'>
      <div class='grid products proximity bag'>
        <Show
          when={viewType() === Scenes.List}
          fallback={
            <GridProductView
              implementation={productFacade.getProductDetails()}
            />
          }
        >
          <ListProductView implementation={productFacade.getProductDetails()} />
        </Show>

        <section class='flex col proximity items-start'>
          <button
            type='button'
            onClick={handleViewChange}
            class={ShapeIcon.Default}
            aria-label='Toggle View'
            aria-pressed={viewType() === Scenes.Grid}
          >
            <LayersDownIcon />
          </button>

          <OptionSelector
            options={productOptions}
            selectedOptions={selectedOptions}
            onSelect={setSelectedOptions}
          />

          <div class={getStack('material content-full')}>
            <p class='concise'>Total Price:</p>
            <h4 class='subtitle'>${totalPrice().toFixed(2)}</h4>
          </div>
        </section>
      </div>
    </PageDecorator>
  );
};

export default Bag;
