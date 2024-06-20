export function withDiscount(WrappedComponent, discountPercent) {
  return {
    ...WrappedComponent,
    getPrice() {
      return WrappedComponent.getPrice() * (1 - discountPercent);
    },
    display() {
      return (
        <div>
          {WrappedComponent.display()}
          <div>Discounted Price: ${this.getPrice().toFixed(2)}</div>
        </div>
      );
    },
  };
}
