import type { ParentComponent } from 'solid-js';
import { DialogOverlay } from 'solid-a11y';

import './DialogContent.css';

const DialogContent: ParentComponent = ({ children }) => {
  return (
    <>
      <DialogOverlay class='backdrop alert' />

      <div class='dialog'>
        <div class='depth view rounded alert'>{children}</div>
      </div>
    </>
  );
};

export default DialogContent;
