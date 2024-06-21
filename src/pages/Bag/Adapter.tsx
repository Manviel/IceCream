import { IProductComponent } from './Composite';

export class LegacyPriceCalculator {
  calculatePrice(basePrice: number, options: Record<string, number>): number {
    return (
      basePrice + Object.values(options).reduce((sum, value) => sum + value, 0)
    );
  }
}

export class PriceCalculatorAdapter {
  constructor(private legacyCalculator: LegacyPriceCalculator) {}

  getPrice(
    product: IProductComponent,
    selectedOptions: Record<string, number>
  ): number {
    const basePrice = product.getPrice();
    return this.legacyCalculator.calculatePrice(basePrice, selectedOptions);
  }
}
