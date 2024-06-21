import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import { Pages } from '../../models';

const Bag: Component = () => {
  const [selectedOptions, setSelectedOptions] = createSignal<
    Record<string, number>
  >({});
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

  const handleViewChange = () =>
    setViewType((v) => (v === 'list' ? 'grid' : 'list'));

  return (
    <PageDecorator headline={Pages.Bag} subtitle='Endless potential'>
      <button type='button' onClick={handleViewChange}>
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

      <h4>Total Price: ${totalPrice().toFixed(2)}</h4>
    </PageDecorator>
  );
};

export default Bag;
