import { createStore } from 'solid-js/store';

import { ProductDecorator } from './Decorator';

export const [productStore, setProductStore] = createStore<ProductDecorator[]>([]);

export const addProduct = (product: ProductDecorator) => {
  setProductStore(products => [...products, product]);
};
