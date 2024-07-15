import { createStore } from 'solid-js/store';

import { ProductDecorator } from './Decorator';

export const [productStore, setProductStore] = createStore<ProductDecorator[]>([]);
