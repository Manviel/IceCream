import { JSX } from 'solid-js/jsx-runtime';

import { PriceCalculatorAdapter } from './Adapter';
import { IProductComponent } from './Composite';
import { StateType } from './State';

export class ProductPageFacade {
  constructor(
    private product: IProductComponent,
    private priceCalculator: PriceCalculatorAdapter
  ) {}

  getProductDetails(): JSX.Element {
    return this.product.display();
  }

  calculatePrice(selectedOptions: StateType): number {
    return this.priceCalculator.getPrice(this.product, selectedOptions);
  }
}
