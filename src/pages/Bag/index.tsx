import { Component, For } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import { Pages } from '../../models';

import { productStore, addProduct } from "./Singleton";
import { ProductComparator } from './Strategy';
import { ProductFactory } from './Factory';

const Bag: Component = () => {
    const comparator = new ProductComparator();

  const addLaptop = () => {
    const laptop = ProductFactory.createLaptop("Laptop Model X", 999);
    addProduct(laptop);
  };

  return (
    <PageDecorator headline={Pages.Bag} subtitle="Endless potential">
      <button onClick={addLaptop}>Add Laptop</button>

      <For each={productStore}>
        {(product, index) => (
          <div>
            <h2>{product.name}</h2>
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
            {index() > 0 && (
              <p>Price Difference: ${comparator.compare(productStore[index() - 1], product)}</p>
            )}
          </div>
        )}
      </For>
    </PageDecorator>
  );
};

export default Bag;
