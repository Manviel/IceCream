import type { ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Dialog } from '@ark-ui/solid';

import { ActionSheetType } from '.';

interface FactoryType extends ActionSheetType {
  factory: JSX.Element;
}

const AbstractDialogContent: ParentComponent<FactoryType> = ({
  factory,
  isFullScreen,
  childClassName,
}) => (
  <>
    <Dialog.Backdrop class='backdrop vibrancy' />

    <Dialog.Positioner class='dialog content-tall content-full flex items-center justify-center'>
      <Dialog.Content
        class={`modal view flex col content-full ${childClassName}`}
        classList={{ 'content-tall': isFullScreen }}
      >
        {factory}
      </Dialog.Content>
    </Dialog.Positioner>
  </>
);

export default AbstractDialogContent;
