import { IProductComponent } from './Composite';
import { StateType } from './State';

export enum Tiers {
  Entry = 'i3',
  Mid = 'i5',
  High = 'i7',
}

export enum Parts {
  CPU = 'Chip',
  RAM = 'Memory',
  Storage = 'Storage',
}

export class LegacyPriceCalculator {
  calculatePrice(basePrice: number, options: { optionPrices: number }): number {
    return basePrice + options.optionPrices;
  }
}

export class PriceCalculatorAdapter {
  constructor(private legacyCalculator: LegacyPriceCalculator) {}

  getPrice(product: IProductComponent, selectedOptions: StateType): number {
    const basePrice = product.getPrice();

    const optionPrices = Object.entries(selectedOptions).reduce(
      (sum, [key, value]) => {
        if (typeof value === 'number') {
          return sum + value;
        } else if (key === Parts.CPU) {
          const cpuPrices = {
            [Tiers.Entry]: 0,
            [Tiers.Mid]: 100,
            [Tiers.High]: 200,
          };

          return sum + (cpuPrices[value as keyof typeof cpuPrices] || 0);
        }
        return sum;
      },
      0
    );

    return this.legacyCalculator.calculatePrice(basePrice, { optionPrices });
  }
}
