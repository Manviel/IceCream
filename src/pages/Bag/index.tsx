import { Component, createSignal, createMemo, Show } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import { Pages } from '../../models';

import { ProductComponent, CompositeProduct } from './Composite';
import { withDiscount } from './Decorator';
import { LegacyPriceCalculator, PriceCalculatorAdapter } from './Adapter';
import { ProductPageFacade } from './Facade';
import {
  ListProductView,
  GridProductView,
  OptionSelector,
  OptionType,
  NumericOption,
  TextOption,
} from './Bridge';

const Bag: Component = () => {
  const [selectedOptions, setSelectedOptions] = createSignal({});
  const [viewType, setViewType] = createSignal<'list' | 'grid'>('list');

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
    productFacade.calculatePrice(selectedOptions())
  );

  const productOptions: OptionType[] = [
    NumericOption('RAM', [4, 8, 16, 32]),
    NumericOption('Storage', [256, 512, 1024]),
    TextOption('CPU', ['i3', 'i5', 'i7']),
  ];

  return (
    <PageDecorator headline={Pages.Bag} subtitle='Endless potential'>
      <button
        onClick={() => setViewType((v) => (v === 'list' ? 'grid' : 'list'))}
      >
        Toggle View
      </button>

      <Show
        when={viewType() === 'list'}
        fallback={
          <GridProductView implementation={productFacade.getProductDetails()} />
        }
      >
        <ListProductView implementation={productFacade.getProductDetails()} />
      </Show>

      <OptionSelector
        options={productOptions}
        selectedOptions={selectedOptions()}
        onSelect={setSelectedOptions}
      />

      <div>Total Price: ${totalPrice().toFixed(2)}</div>
    </PageDecorator>
  );
};

export default Bag;
