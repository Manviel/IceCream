import type { ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import { DialogOverlay } from 'solid-a11y';

type FactoryType = {
  factory: JSX.Element;
  parentClassName: string;
  childClassName: string;
};

const AbstractDialogContent: ParentComponent<FactoryType> = ({
  children,
  factory,
  parentClassName,
  childClassName,
}) => (
  <>
    <DialogOverlay class='backdrop' />

    <div class={parentClassName}>
      <div class={childClassName}>{factory}</div>

      {children}
    </div>
  </>
);

export default AbstractDialogContent;
