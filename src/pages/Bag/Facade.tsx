import { PricingAdapter, LocalPricingAdapter } from './Adapter';
import { Product } from './Composite';
import { ProductFactory } from './Factory';
import { ProductComparator } from './Strategy';

export class ProductFacade {
  private factory: ProductFactory;
  private comparator: ProductComparator;
  private pricingAdapter: PricingAdapter;

  constructor() {
    this.factory = new ProductFactory();
    this.comparator = new ProductComparator();
    this.pricingAdapter = new LocalPricingAdapter();
  }

  createProducts(productNames: string[]): Product[] {
    return productNames.map(name => {
      const price = this.pricingAdapter.getPrice({ name } as Product);
      return this.factory.createLaptop(name, price);
    });
  }

  compareProducts(products: Product[]): {
    priceDifferences: number[];
    valueDifferences: number[];
  } {
    const priceDifferences = [];
    const valueDifferences = [];

    for (let i = 1; i < products.length; i++) {
      priceDifferences.push(this.comparator.compare(products[i - 1], products[i], 'price'));
      valueDifferences.push(this.comparator.compare(products[i - 1], products[i], 'value'));
    }

    return { priceDifferences, valueDifferences };
  }
}
