import type { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { DialogOverlay } from 'solid-a11y';

import './DialogContent.css';

type DialogContentType = {
  children: JSX.Element;
};

const DialogContent: Component<DialogContentType> = ({ children }) => {
  return (
    <>
      <DialogOverlay class='backdrop alert' />

      <div class='dialog'>
        <div class='page view rounded alert'>{children}</div>
      </div>
    </>
  );
};

export default DialogContent;
