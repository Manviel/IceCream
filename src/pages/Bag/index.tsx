import { Component, For, createSignal, Index, createMemo } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import PageDecorator from '../../components/PageDecorator';
import Field from '../../components/Field';
import NumberField from '../../components/Field/NumberField';

import { Pages } from '../../global';
import { ActionTypes, getStack } from '../../global/theme';

import { productStore, setProductStore } from './Singleton';
import { ProductFacade } from './Facade';
import { BundleDecorator, ProductDecorator, WarrantyDecorator } from './Decorator';
import { Devices, Tiers } from './Adapter';

import './Bag.css';

const Bag: Component = () => {
  const [warrantyYears, setWarrantyYears] = createSignal(1);
  const [bundleItems, setBundleItems] = createSignal(['Cable']);

  const facade = new ProductFacade();

  const addDevices: JSX.EventHandler<HTMLFormElement, SubmitEvent> = e => {
    e.preventDefault();

    const baseProducts = facade.createProducts([
      `${Devices.Tablet} ${Tiers.Entry}`,
      `${Devices.Mobile} ${Tiers.High}`,
      `${Devices.Laptop} ${Tiers.Mid}`,
      `${Devices.Laptop} ${Tiers.Entry}`
    ]);

    const decoratedProducts = baseProducts.map(product => {
      const decoratedProduct: ProductDecorator = new WarrantyDecorator(product, warrantyYears());
      return new BundleDecorator(decoratedProduct, bundleItems());
    });

    setProductStore(decoratedProducts);
  };

  const handleWarrantyChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({
    target
  }) => {
    setWarrantyYears(parseInt(target.value));
  };

  const handleBundleChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) => {
    setBundleItems(target.value.split(', '));
  };

  const calculateTotalPrice = (product: ProductDecorator) =>
    product.basePrice + product.options.reduce((sum, option) => sum + option.price, 0);

  const comparisons = createMemo(() => {
    if (productStore.length < 2) return null;
    return facade.compareProducts(productStore);
  });

  return (
    <PageDecorator headline={Pages.Bag} subtitle="Endless potential">
      <form onSubmit={addDevices}>
        <NumberField
          name="warranty"
          label="Warranty Years"
          value={warrantyYears()}
          onInput={handleWarrantyChange}
          required
        />

        <Field
          name="bundle"
          label="Bundle Items (comma-separated)"
          value={bundleItems().join(', ')}
          onInput={handleBundleChange}
          required
        />

        <button type="submit" class={ActionTypes.Contained}>
          Add Devices
        </button>
      </form>

      <div class="grid products proximity screen bag">
        <Index each={productStore}>
          {(product, index) => (
            <article class="view layer rounded">
              <h3 class="subtitle">{product().getDescription()}</h3>

              <header class="flex justify-between items-center">
                <p class="term grey-light card-header">Base Price: ${product().basePrice}</p>

                {index > 0 && comparisons() && (
                  <div class="flex gap">
                    <p class="chip box">Difference: {comparisons()?.priceDifferences[index - 1]}</p>
                    <p class="chip box">
                      Value: {comparisons()?.valueDifferences[index - 1].toFixed(2)} pt
                    </p>
                  </div>
                )}
              </header>

              <h4 class="card-sub">Options:</h4>

              <ul class="info">
                <For each={product().options}>
                  {option => (
                    <li>
                      {option.name}: ${option.price}
                    </li>
                  )}
                </For>
              </ul>

              <div class={getStack('ghost')}>
                <p class="concise">Total Price:</p>

                <h5 class="subtitle">${calculateTotalPrice(product())}</h5>
              </div>
            </article>
          )}
        </Index>
      </div>
    </PageDecorator>
  );
};

export default Bag;
