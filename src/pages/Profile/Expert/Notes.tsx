import { Component, createSignal, Show } from 'solid-js';

const Notes: Component = () => {
  const [open, setOpen] = createSignal(false);

  const handleOpen = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setOpen(true);

    const main = document.querySelector('.app');

    main?.classList.add('bottom-main');
    document.body.classList.add('hide-scroll');
  };

  const handleClose = () => {
    setOpen(false);

    const main = document.querySelector('.app');

    main?.classList.remove('bottom-main');
    document.body.classList.remove('hide-scroll');
  };

  return (
    <>
      <button class='btn sidebar' onClick={handleOpen}>
        Notes
      </button>
      <Show when={open()}>
        {() => (
          <div class='bottom-sheet layer'>
            <div
              class='flex col view'
              role='dialog'
              aria-modal='true'
              aria-labelledby='ion-modal'
            >
              <div class='flex justify-between items-center'>
                <h2 class='subtitle' id='ion-modal'>
                  Notes
                </h2>
                <button class='btn' onClick={handleClose}>
                  Close
                </button>
              </div>
              <p class='info'>
                The Event Loop has one simple job — to monitor the Call Stack
                and the Callback Queue. If the Call Stack is empty, the Event
                Loop will take the first event from the queue and will push it
                to the Call Stack, which effectively runs it.
              </p>
            </div>
          </div>
        )}
      </Show>
    </>
  );
};

export default Notes;
