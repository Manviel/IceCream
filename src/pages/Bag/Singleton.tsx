import { createStore } from 'solid-js/store';

import { Product } from './Composite';

export const [productStore, setProductStore] = createStore<Product[]>([]);

export const addProduct = (product: Product) => {
  setProductStore(products => [...products, product]);
};
