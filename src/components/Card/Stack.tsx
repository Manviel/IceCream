import { ParentComponent, Accessor } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import { ISegregation } from '../../global';
import { getGroup } from '../../global/theme';

interface IStack<T> extends ISegregation<T> {
  theme: string;
}

const BaseStack: ParentComponent<IStack<JSX.Element>> = (props) => (
  <div class={getGroup(`items-end ${props.theme}`)}>
    <div class="flex col lockup">
      <p>{props.title}</p>

      {props.description}
    </div>

    {props.children}
  </div>
);

const Stack: ParentComponent<IStack<string>> = (props) => (
  <BaseStack
    title={props.title}
    description={<strong class="subtitle">{props.description}</strong>}
    theme={props.theme}
  >
    {props.children}
  </BaseStack>
);

export const Bundle: ParentComponent<IStack<Accessor<number>>> = (props) => (
  <BaseStack
    title={props.title}
    description={
      <strong class="subtitle" role="status">
        {props.description().toFixed(2)}
      </strong>
    }
    theme={props.theme}
  >
    {props.children}
  </BaseStack>
);

export default Stack;
