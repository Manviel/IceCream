import { Component, For, createSignal } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import { Pages } from '../../models';

import { productStore, addProduct } from './Singleton';
import { ProductFacade } from './Facade';
import { BundleDecorator, ProductDecorator, WarrantyDecorator } from './Decorator';

const Bag: Component = () => {
  const facade = new ProductFacade();
  const [warrantyYears, setWarrantyYears] = createSignal(1);
  const [bundleItems, setBundleItems] = createSignal(['mouse', 'laptop bag']);
  const [priceDifferences, setPriceDifferences] = createSignal<number[]>([]);

  const addLaptops = () => {
    const { products, priceDifferences } = facade.createAndCompareProducts([
      'Laptop X',
      'Laptop Pro',
      'Laptop Ultra'
    ]);

    setPriceDifferences(priceDifferences);

    products.forEach(product => {
      let decoratedProduct: ProductDecorator = new WarrantyDecorator(product, warrantyYears());
      decoratedProduct = new BundleDecorator(decoratedProduct, bundleItems());
      addProduct(decoratedProduct);
    });
  };

  return (
    <PageDecorator headline={Pages.Bag} subtitle="Endless potential">
      <label>
        Warranty Years:
        <input
          type="number"
          value={warrantyYears()}
          onInput={e => setWarrantyYears(parseInt(e.target.value))}
          min="0"
        />
      </label>

      <label>
        Bundle Items (comma-separated):
        <input
          type="text"
          value={bundleItems().join(', ')}
          onInput={e => setBundleItems(e.target.value.split(', '))}
        />
      </label>

      <button onClick={addLaptops}>Add Laptops</button>

      <For each={productStore}>
        {(product, index) => (
          <div>
            <h2>{product.getDescription()}</h2>
            <p>Base Price: ${product.basePrice}</p>
            <h3>Options:</h3>
            <ul>
              <For each={product.options}>
                {option => (
                  <li>
                    {option.name}: ${option.price}
                  </li>
                )}
              </For>
            </ul>
            <p>
              Total Price: $
              {product.basePrice + product.options.reduce((sum, option) => sum + option.price, 0)}
            </p>
            {index() > 0 && <p>Price Difference: ${priceDifferences()[index() - 1]}</p>}
          </div>
        )}
      </For>
    </PageDecorator>
  );
};

export default Bag;
