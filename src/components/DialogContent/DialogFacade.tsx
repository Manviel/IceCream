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

  const handleOpen = () => {
    setOpen(true);
    toggleActionSheet?.();
  };

  const handleClose = () => {
    setOpen(false);
    toggleActionSheet?.();
  };

  return (
    <Dialog.Root
      lazyMount
      unmountOnExit
      restoreFocus
      open={open()}
      onExitComplete={handleClose}
    >
      <Dialog.Trigger
        type='button'
        class={triggerClassName}
        onClick={handleOpen}
      >
        {triggerContent}
      </Dialog.Trigger>

      <Portal>
        <DialogContent
          isFullScreen={isFullScreen}
          childClassName={childClassName}
        >
          <div class='flex justify-between items-center'>
            <Dialog.Title class='subtitle card-header'>{title}</Dialog.Title>

            <Dialog.CloseTrigger
              type='button'
              class={ShapeIcon.Default}
              aria-label='Close'
            >
              <CloseIcon />
            </Dialog.CloseTrigger>
          </div>

          <Dialog.Description class='info'>{description}</Dialog.Description>

          {children}

          <Dialog.CloseTrigger
            type='button'
            class={ActionTypes.Secondary}
            classList={{ provision: true }}
          >
            {closingName}
          </Dialog.CloseTrigger>
        </DialogContent>
      </Portal>
    </Dialog.Root>
  );
};

export default DialogFacade;
