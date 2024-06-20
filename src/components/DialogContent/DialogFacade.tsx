import { ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Dialog } from '@kobalte/core/dialog';

import { SegregationType } from '../../models';
import { ShapeIcon } from '../../models/theme';

import CloseIcon from '../../assets/icons/close.svg';

import DialogContent, { ActionSheetType } from '.';

interface DialogFacadeType extends SegregationType, ActionSheetType {
  closingActions?: JSX.Element;
  triggerClassName: string;
  triggerContent: JSX.Element;
  toggleActionSheet?: () => void;
}

const DialogFacade: ParentComponent<DialogFacadeType> = ({
  title,
  description,
  closingActions,
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
    <Dialog onOpenChange={handleOpenChange}>
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

            <Dialog.CloseButton type='button' class={ShapeIcon.Default}>
              <CloseIcon />
            </Dialog.CloseButton>
          </div>

          <Dialog.Description class='info'>{description}</Dialog.Description>

          {children}

          <div class='flex gap justify-between closing-actions'>
            {closingActions}
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog>
  );
};

export default DialogFacade;
