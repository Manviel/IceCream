import { Product } from './Composite';

export class ProductBuilder {
  private product: Product;

  constructor(name: string, basePrice: number) {
    this.product = new Product(name, basePrice, []);
  }

  addOption(name: string, price: number): ProductBuilder {
    this.product.options.push({ name, price });
    return this;
  }

  build(): Product {
    return this.product;
  }
}
