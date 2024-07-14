import { Product, ProductOption } from './Composite';

export abstract class ProductDecorator implements Product {
  constructor(protected product: Product) {}

  get name(): string {
    return this.product.name;
  }

  get basePrice(): number {
    return this.product.basePrice;
  }

  get options(): ProductOption[] {
    return this.product.options;
  }

  abstract getDescription(): string;
}

export class WarrantyDecorator extends ProductDecorator {
  private warrantyPrice: number;

  constructor(product: Product, warrantyYears: number) {
    super(product);
    this.warrantyPrice = warrantyYears * 50;
  }

  get basePrice(): number {
    return this.product.basePrice + this.warrantyPrice;
  }

  getDescription(): string {
    return `${this.product.name} with ${this.warrantyPrice / 50} year(s) warranty`;
  }
}

export class BundleDecorator extends ProductDecorator {
  private bundleItems: string[];

  constructor(product: Product, bundleItems: string[]) {
    super(product);
    this.bundleItems = bundleItems;
  }

  getDescription(): string {
    return `${this.product.name} bundled with ${this.bundleItems.join(', ')}`;
  }
}
