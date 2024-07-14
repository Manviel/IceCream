import { Product } from './Composite';

export class ProductComparator {
  compare(prev: Product, next: Product): number {
    const prevTotalPrice =
      prev.basePrice + prev.options.reduce((sum, option) => sum + option.price, 0);
    const nextTotalPrice =
      next.basePrice + next.options.reduce((sum, option) => sum + option.price, 0);

    return prevTotalPrice - nextTotalPrice;
  }
}
