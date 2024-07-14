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

  createAndCompareProducts(productNames: string[]): {
    products: Product[];
    priceDifferences: number[];
  } {
    const products = productNames.map(name =>
      this.factory.createLaptop(name, this.pricingAdapter.getPrice({ name } as Product))
    );
    const priceDifferences = products
      .slice(1)
      .map((product, index) => this.comparator.compare(products[index], product));

    return { products, priceDifferences };
  }
}
