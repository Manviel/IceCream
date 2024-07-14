import { Component, For, createSignal } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import PageDecorator from '../../components/PageDecorator';
import Field from '../../components/Field';
import NumberField from '../../components/Field/NumberField';

import { Pages } from '../../global';
import { ActionTypes, getStack } from '../../global/theme';

import { productStore, addProduct } from './Singleton';
import { ProductFacade } from './Facade';
import { BundleDecorator, ProductDecorator, WarrantyDecorator } from './Decorator';
import { Devices, Tiers } from './Adapter';

import './Bag.css';

const Bag: Component = () => {
  const [warrantyYears, setWarrantyYears] = createSignal(1);
  const [bundleItems, setBundleItems] = createSignal(['Cable']);
  const [priceDifferences, setPriceDifferences] = createSignal<number[]>([]);

  const facade = new ProductFacade();

  const addLaptops: JSX.EventHandler<HTMLFormElement, SubmitEvent> = e => {
    e.preventDefault();

    const { products, priceDifferences } = facade.createAndCompareProducts([
      `${Devices.Tablet} ${Tiers.Entry}`,
      `${Devices.Mobile} ${Tiers.High}`,
      `${Devices.Laptop} ${Tiers.Mid}`
    ]);

    setPriceDifferences(priceDifferences);

    products.forEach(product => {
      let decoratedProduct: ProductDecorator = new WarrantyDecorator(product, warrantyYears());
      decoratedProduct = new BundleDecorator(decoratedProduct, bundleItems());
      addProduct(decoratedProduct);
    });
  };

  const handleWarrantyChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({
    target
  }) => {
    setWarrantyYears(parseInt(target.value));
  };

  const handleBundleChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) => {
    setBundleItems(target.value.split(', '));
  };

  return (
    <PageDecorator headline={Pages.Bag} subtitle="Endless potential">
      <form onSubmit={addLaptops}>
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
          Add Laptops
        </button>
      </form>

      <div class="grid products proximity screen bag">
        <For each={productStore}>
          {(product, index) => (
            <article class="view layer rounded">
              <h3 class="subtitle">{product.getDescription()}</h3>

              <header class="flex justify-between items-center">
                <p class="term grey-light card-header">Base Price: ${product.basePrice}</p>

                {index() > 0 && <p class="chip box">{priceDifferences()[index() - 1]}</p>}
              </header>

              <h4 class="card-sub">Options:</h4>

              <ul class="info">
                <For each={product.options}>
                  {option => (
                    <li>
                      {option.name}: ${option.price}
                    </li>
                  )}
                </For>
              </ul>

              <div class={getStack('ghost')}>
                <p class="concise">Total Price:</p>

                <h5 class="subtitle">
                  $
                  {product.basePrice +
                    product.options.reduce((sum, option) => sum + option.price, 0)}
                </h5>
              </div>
            </article>
          )}
        </For>
      </div>
    </PageDecorator>
  );
};

export default Bag;
