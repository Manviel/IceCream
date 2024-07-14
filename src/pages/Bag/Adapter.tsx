import { Product } from './Composite';

export interface PricingAdapter {
  getPrice(product: Product): number;
}

class LocalPricingService {
  private basePrices: Record<string, number> = {
    Laptop: 800,
    Desktop: 1000,
    Tablet: 400,
    Smartphone: 600
  };

  private premiumMultiplier: Record<string, number> = {
    X: 1.2,
    Pro: 1.5,
    Ultra: 1.8
  };

  getPrice(productName: string): number {
    const [category, ...nameParts] = productName.split(' ');

    let basePrice = this.basePrices[category] || 500;

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
