export class LegacyPriceCalculator {
  calculatePrice(basePrice, options) {
    // Legacy calculation logic
    return (
      basePrice + Object.values(options).reduce((sum, value) => sum + value, 0)
    );
  }
}

export class PriceCalculatorAdapter {
  constructor(legacyCalculator) {
    this.legacyCalculator = legacyCalculator;
  }

  getPrice(product, selectedOptions) {
    const basePrice = product.getPrice();
    return this.legacyCalculator.calculatePrice(basePrice, selectedOptions);
  }
}
