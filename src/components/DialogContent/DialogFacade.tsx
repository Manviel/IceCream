import { createSignal, Show, ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Dialog, DialogTitle, Description } from 'solid-a11y';

import { SegregationType } from '../../models';
import { ActionTypes } from '../../models/config';

import DialogContent from '.';

interface DialogFacadeType extends SegregationType {
  closingName: string;
  triggerClassName: string;
  triggerContent: JSX.Element;
}

const DialogFacade: ParentComponent<DialogFacadeType> = ({
  title,
  description,
  closingName,
  children,
  triggerContent,
  triggerClassName,
}) => {
  const [open, setOpen] = createSignal(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <button type='button' class={triggerClassName} onClick={handleOpen}>
        {triggerContent}
      </button>

      <Show when={open()}>
        {() => (
          <Dialog onClose={setOpen}>
            <DialogContent>
              <DialogTitle class='subtitle'>{title}</DialogTitle>

              <Description class='info'>{description}</Description>

              {children}

              <button
                type='button'
                class={ActionTypes.Secondary}
                onClick={handleClose}
              >
                {closingName}
              </button>
            </DialogContent>
          </Dialog>
        )}
      </Show>
    </>
  );
};

export default DialogFacade;
