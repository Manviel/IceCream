import { Component, createSignal, Show } from 'solid-js';
import { Dialog, DialogTitle, Description } from 'solid-a11y';

import TrayIcon from '../../../assets/icons/tray.svg';

import DialogContent from '../DialogContent';

const Inbox: Component = () => {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <button
        class='view layer rounded flex col widget'
        onClick={() => setOpen(true)}
      >
        <strong class='widget-title'>Inbox</strong>
        <p class='widget-main'>1</p>

        <div class='widget-group'>
          <TrayIcon />
        </div>
      </button>

      <Show when={open()}>
        {() => (
          <Dialog onClose={setOpen}>
            <DialogContent>
              <DialogTitle class='subtitle'>Payment successful</DialogTitle>

              <Description class='info'>
                You can read more on our payment policy.
              </Description>

              <button class='btn' onClick={() => setOpen(false)}>
                Close
              </button>
            </DialogContent>
          </Dialog>
        )}
      </Show>
    </>
  );
};

export default Inbox;
