import { ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Dialog } from '@kobalte/core';

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
  const handleOpenChange = () => {
    toggleActionSheet?.();
  };

  return (
    <Dialog.Root onOpenChange={handleOpenChange}>
      <Dialog.Trigger type='button' class={triggerClassName}>
        {triggerContent}
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogContent
          isFullScreen={isFullScreen}
          childClassName={childClassName}
        >
          <div class='flex justify-between items-center'>
            <Dialog.Title class='subtitle card-header'>{title}</Dialog.Title>

            <Dialog.CloseButton
              type='button'
              class={ShapeIcon.Default}
              aria-label='Close'
            >
              <CloseIcon />
            </Dialog.CloseButton>
          </div>

          <Dialog.Description class='info'>{description}</Dialog.Description>

          {children}

          <Dialog.CloseButton
            type='button'
            class={ActionTypes.Secondary}
            classList={{ provision: true }}
          >
            {closingName}
          </Dialog.CloseButton>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogFacade;
