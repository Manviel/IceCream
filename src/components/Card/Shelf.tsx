import { mergeProps, type Component } from 'solid-js';

import { ISegregation } from '../../global';

interface IShelf extends ISegregation<string> {
  hasColSpan?: boolean;
  hasRowSpan?: boolean;
}

const Shelf: Component<IShelf> = _props => {
  const props = mergeProps({ hasColSpan: false, hasRowSpan: false }, _props);

  return (
    <div
      class="flex col os card"
      classList={{ 'col-span-2': props.hasColSpan, 'os-row': props.hasRowSpan }}
    >
      <strong class="card-sub">{props.title}</strong>
      <p class="term grey-light">{props.description}</p>
    </div>
  );
};
export default Shelf;
