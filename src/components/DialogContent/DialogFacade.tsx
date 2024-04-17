import { createSignal, ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Portal } from 'solid-js/web';
import { Dialog } from '@ark-ui/solid';

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

      <Dialog.Root
        lazyMount
        unmountOnExit
        open={open()}
        onOpenChange={handleClose}
      >
        <Portal>
          <DialogContent
            isFullScreen={isFullScreen}
            childClassName={childClassName}
          >
            <Dialog.Content class='flex justify-between items-center'>
              <Dialog.Title class='subtitle card-header'>{title}</Dialog.Title>

              <Dialog.CloseTrigger
                type='button'
                class={ShapeIcon.Default}
                onClick={handleClose}
                aria-label='Close'
              >
                <CloseIcon />
              </Dialog.CloseTrigger>
            </Dialog.Content>

            <Dialog.Description class='info'>{description}</Dialog.Description>

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
        </Portal>
      </Dialog.Root>
    </>
  );
};

export default DialogFacade;
