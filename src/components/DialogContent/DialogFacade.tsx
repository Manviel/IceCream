import { createSignal, Show, ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Dialog, DialogTitle, Description } from 'solid-a11y';

import { SegregationType } from '../../models';
import { ActionTypes } from '../../models/config';
import { ShapeIcon } from '../../models/theme';

import CloseIcon from '../../assets/icons/close.svg';

import DialogContent, { ActionSheetType } from '.';

interface DialogFacadeType extends SegregationType, ActionSheetType {
  closingName: string;
  triggerClassName: string;
  triggerContent: JSX.Element;
  toggleActionSheet?: () => void;
}

const DialogFacade: ParentComponent<DialogFacadeType> = ({
  title,
  description,
  closingName,
  children,
  triggerContent,
  triggerClassName,
  isFullScreen,
  childClassName,
  toggleActionSheet,
}) => {
  const [open, setOpen] = createSignal(false);

  let restoreFocus: HTMLButtonElement;

  const handleOpen = () => {
    setOpen(true);
    toggleActionSheet?.();
  };

  const handleClose = () => {
    setOpen(false);
    toggleActionSheet?.();

    restoreFocus.focus();
  };

  return (
    <>
      <button
        type='button'
        class={triggerClassName}
        onClick={handleOpen}
        ref={restoreFocus!}
      >
        {triggerContent}
      </button>

      <Show when={open()}>
        <Dialog onClose={setOpen}>
          <DialogContent
            isFullScreen={isFullScreen}
            childClassName={childClassName}
          >
            <div class='flex justify-between items-center'>
              <DialogTitle class='subtitle card-navigation'>
                {title}
              </DialogTitle>

              <button
                type='button'
                class={ShapeIcon.Default}
                onClick={handleClose}
                aria-label='Close'
              >
                <CloseIcon />
              </button>
            </div>

            <Description class='info'>{description}</Description>

            {children}

            <button
              type='button'
              class={ActionTypes.Secondary}
              onClick={handleClose}
              classList={{ provision: true }}
            >
              {closingName}
            </button>
          </DialogContent>
        </Dialog>
      </Show>
    </>
  );
};

export default DialogFacade;
