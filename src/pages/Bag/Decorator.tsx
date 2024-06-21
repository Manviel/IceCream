import { JSX } from 'solid-js/jsx-runtime';

import { IProductComponent } from './Composite';

export function withDiscount(
  WrappedComponent: IProductComponent,
  discountPercent: number
): IProductComponent {
  return {
    ...WrappedComponent,
    getPrice(): number {
      return WrappedComponent.getPrice() * (1 - discountPercent);
    },
    display(): JSX.Element {
      return (
        <section>
          {WrappedComponent.display()}
          <p>Discounted Price: ${this.getPrice().toFixed(2)}</p>
        </section>
      );
    },
  };
}
