import { JSX } from 'solid-js/jsx-runtime';

import { getStack } from '../../models/theme';

import { getStack } from '../../models/theme';

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
        <>
          {WrappedComponent.display()}

          <div class={getStack('price')}>
            <p class='concise'>Discounted Price:</p>
            <strong class='subtitle'>${this.getPrice().toFixed(2)}</strong>
          </div>
        </>
      );
    }
  };
}
