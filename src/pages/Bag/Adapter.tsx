import { Product } from './Composite';

export interface PricingAdapter {
  getPrice(product: Product): number;
}

export enum Tiers {
  Entry = 'Air',
  Mid = 'Pro',
  High = 'Ultra'
}

export enum Devices {
  Laptop = 'Laptop',
  Tablet = 'Tablet',
  Mobile = 'Smartphone'
}

class LocalPricingService {
  private basePrices: Record<string, number> = {
    [Devices.Laptop]: 1800,
    [Devices.Tablet]: 700,
    [Devices.Mobile]: 600
  };

  private premiumMultiplier: Record<string, number> = {
    [Tiers.Entry]: 1.2,
    [Tiers.Mid]: 1.5,
    [Tiers.High]: 1.8
  };

  getPrice(productName: string): number {
    const [category, ...nameParts] = productName.split(' ');

    let basePrice = this.basePrices[category] || 399;

    const modelName = nameParts.join(' ');

    for (const [key, multiplier] of Object.entries(this.premiumMultiplier)) {
      if (modelName.includes(key)) {
        basePrice *= multiplier;
        break;
      }
    }

    return Math.round(basePrice);
  }
}

export class LocalPricingAdapter implements PricingAdapter {
  private pricingService: LocalPricingService;

  constructor() {
    this.pricingService = new LocalPricingService();
  }

  getPrice(product: Product): number {
    return this.pricingService.getPrice(product.name);
  }
}
