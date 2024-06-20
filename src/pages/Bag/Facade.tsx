export class ProductPageFacade {
  constructor(product, priceCalculator) {
    this.product = product;
    this.priceCalculator = priceCalculator;
  }

  getProductDetails() {
    return this.product.display();
  }

  calculatePrice(selectedOptions) {
    return this.priceCalculator.getPrice(this.product, selectedOptions);
  }
}
