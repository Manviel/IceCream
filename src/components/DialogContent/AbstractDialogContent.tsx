import type { ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Dialog } from '@kobalte/core/dialog';

import { IActionSheet } from '.';

interface IFactory extends IActionSheet {
  factory: JSX.Element;
}

const AbstractDialogContent: ParentComponent<IFactory> = (props) => (
  <>
    <Dialog.Overlay class="backdrop vibrancy" />

    <div class="dialog content-tall content-full flex items-center justify-center">
      <Dialog.Content
        class={`modal view flex col content-full ${props.childClassName}`}
        classList={{ 'content-tall': props.isFullScreen }}
      >
        {props.factory}
      </Dialog.Content>
    </div>
  </>
);

export default AbstractDialogContent;
