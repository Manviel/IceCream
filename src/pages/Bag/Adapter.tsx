import { IProductComponent } from './Composite';

export class LegacyPriceCalculator {
  calculatePrice(basePrice: number, options: { optionPrices: number }): number {
    return basePrice + options.optionPrices;
  }
}

export class PriceCalculatorAdapter {
  constructor(private legacyCalculator: LegacyPriceCalculator) {}

  getPrice(
    product: IProductComponent,
    selectedOptions: Record<string, number>
  ): number {
    const basePrice = product.getPrice();

    const optionPrices = Object.entries(selectedOptions).reduce(
      (sum, [key, value]) => {
        if (typeof value === 'number') {
          return sum + value;
        } else if (key === 'CPU') {
          // Add a price for CPU options
          const cpuPrices = { i3: 0, i5: 100, i7: 200 };
          return sum + (cpuPrices[value as keyof typeof cpuPrices] || 0);
        }
        return sum;
      },
      0
    );

    return this.legacyCalculator.calculatePrice(basePrice, { optionPrices });
  }
}
