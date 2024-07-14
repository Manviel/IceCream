import { Product } from './Composite';

export class ProductComparator {
  compare(product1: Product, product2: Product): number {
    const totalPrice1 =
      product1.basePrice + product1.options.reduce((sum, option) => sum + option.price, 0);
    const totalPrice2 =
      product2.basePrice + product2.options.reduce((sum, option) => sum + option.price, 0);
    return totalPrice1 - totalPrice2;
  }
}
