import type { ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import { DialogOverlay } from 'solid-a11y';

import { ActionSheetType } from '.';

interface FactoryType extends ActionSheetType {
  factory: JSX.Element;
}

const AbstractDialogContent: ParentComponent<FactoryType> = ({
  children,
  factory,
  isFullScreen,
  childClassName,
}) => (
  <>
    <DialogOverlay class='backdrop' />

    <div class='dialog content-tall content-full flex items-center justify-center'>
      <div
        class={`modal view flex col content-full ${childClassName}`}
        classList={{ 'content-tall': isFullScreen }}
      >
        {factory}
      </div>

      {children}
    </div>
  </>
);

export default AbstractDialogContent;
