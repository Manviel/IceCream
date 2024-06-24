import { JSX } from 'solid-js/jsx-runtime';

import { PriceCalculatorAdapter } from './Adapter';
import { IProductComponent } from './Composite';

export class ProductPageFacade {
  constructor(
    private product: IProductComponent,
    private priceCalculator: PriceCalculatorAdapter
  ) {}

  getProductDetails(): JSX.Element {
    return this.product.display();
  }

  calculatePrice(selectedOptions: Record<string, string | number>): number {
    return this.priceCalculator.getPrice(this.product, selectedOptions);
  }
}
