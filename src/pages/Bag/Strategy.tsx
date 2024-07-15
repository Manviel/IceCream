import { Parts, Product } from './Composite';

type ComparisonCriteria = 'price' | 'value';

export class ProductComparator {
  private calculateTotalPrice(product: Product): number {
    return product.basePrice + product.options.reduce((sum, option) => sum + option.price, 0);
  }

  private comparePrice(prev: Product, next: Product): number {
    return this.calculateTotalPrice(prev) - this.calculateTotalPrice(next);
  }

  private calculatePerformanceScore(product: Product): number {
    let score = 0;
    product.options.forEach(option => {
      if (option.name.includes(Parts.RAM)) {
        score += parseInt(option.name) / 4;
      }

      if (option.name.includes(Parts.Storage)) {
        score += parseInt(option.name) / 128;
      }
    });
    return score;
  }

  private calculateValueScore(product: Product): number {
    const performanceScore = this.calculatePerformanceScore(product);
    const totalPrice = this.calculateTotalPrice(product);
    return (performanceScore / totalPrice) * 1000;
  }

  private compareValue(prev: Product, next: Product): number {
    return this.calculateValueScore(next) - this.calculateValueScore(prev);
  }

  compare(prev: Product, next: Product, criteria: ComparisonCriteria): number {
    switch (criteria) {
      case 'price':
        return this.comparePrice(prev, next);
      case 'value':
        return this.compareValue(prev, next);
      default:
        throw new Error('Invalid comparison criteria');
    }
  }
}
