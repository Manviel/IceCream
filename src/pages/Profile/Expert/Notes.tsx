import { Component, createSignal, Show } from 'solid-js';
import { Dialog, DialogTitle, Description, DialogOverlay } from 'solid-a11y';

import CloseIcon from '../../../assets/icons/close.svg';

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
      <button class='btn sidebar' onClick={handleOpen}>
        Notes
      </button>
      <Show when={open()}>
        {() => (
          <Dialog onClose={setOpen}>
            <DialogOverlay class='backdrop' />

            <div class='flex col view layer bottom-sheet'>
              <div class='flex justify-between items-center'>
                <DialogTitle class='subtitle'>Notes</DialogTitle>
                <button
                  class='flex justify-center items-center shape token'
                  onClick={handleClose}
                >
                  <CloseIcon />
                </button>
              </div>
              <Description class='info'>
                The Event Loop has one simple job — to monitor the Call Stack
                and the Callback Queue. If the Call Stack is empty, the Event
                Loop will take the first event from the queue and will push it
                to the Call Stack, which effectively runs it.
              </Description>
            </div>
          </Dialog>
        )}
      </Show>
    </>
  );
};

export default Notes;
