import { Component, createSignal, Show, ParentComponent } from 'solid-js';
import { Dialog, DialogTitle, Description } from 'solid-a11y';

import { ShapeIcon } from '../../../models/config';

import AbstractDialogContent from '../../../components/DialogContent/AbstractDialogContent';

import CloseIcon from '../../../assets/icons/close.svg';

const SheetContent: ParentComponent = ({ children }) => {
  return (
    <AbstractDialogContent
      parentClassName='flex col view layer bottom-sheet'
      childClassName='flex justify-between items-center'
      factory={children}
    >
      <Description class='info'>
        The Event Loop has one simple job — to monitor the Call Stack and the
        Callback Queue. If the Call Stack is empty, the Event Loop will take the
        first event from the queue and will push it to the Call Stack, which
        effectively runs it.
      </Description>
    </AbstractDialogContent>
  );
};

const Notes: Component = () => {
  const [open, setOpen] = createSignal(false);

  const handleOpen = () => {
    setOpen(true);

    const main = document.querySelector('.app');

    main?.classList.add('bottom-main');
  };

  const handleClose = () => {
    setOpen(false);

    const main = document.querySelector('.app');

    main?.classList.remove('bottom-main');
  };

  return (
    <>
      <button class='btn token provision' onClick={handleOpen}>
        Notes
      </button>
      <Show when={open()}>
        {() => (
          <Dialog onClose={setOpen}>
            <SheetContent>
              <DialogTitle class='subtitle'>Notes</DialogTitle>
              <button class={ShapeIcon} onClick={handleClose}>
                <CloseIcon />
              </button>
            </SheetContent>
          </Dialog>
        )}
      </Show>
    </>
  );
};

export default Notes;
