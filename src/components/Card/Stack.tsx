import { ParentComponent, Accessor } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import { ISegregation } from '../../global';
import { getGroup } from '../../global/theme';

interface IStack<T> extends ISegregation<T> {
  theme: string;
}

const BaseStack: ParentComponent<IStack<JSX.Element>> = ({
  title,
  description,
  theme,
  children
}) => (
  <div class={getGroup(`items-end ${theme}`)}>
    <div class="flex col lockup">
      <p>{title}</p>

      {description}
    </div>

    {children}
  </div>
);

const Stack: ParentComponent<IStack<string>> = ({ title, description, children, theme }) => (
  <BaseStack
    title={title}
    description={<strong class="subtitle">{description}</strong>}
    theme={theme}
  >
    {children}
  </BaseStack>
);

export const Bundle: ParentComponent<IStack<Accessor<number>>> = ({
  title,
  description,
  children,
  theme
}) => (
  <BaseStack
    title={title}
    description={
      <strong class="subtitle" role="status">
        {description().toFixed(2)}
      </strong>
    }
    theme={theme}
  >
    {children}
  </BaseStack>
);

export default Stack;
