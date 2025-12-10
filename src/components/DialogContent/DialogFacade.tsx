import { ParentComponent } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Dialog } from '@kobalte/core/dialog';

import { ISegregation } from '../../global';
import { ShapeIcon } from '../../global/theme';

import CloseIcon from '../../assets/icons/close.svg';

import DialogContent, { IActionSheet } from '.';

interface IDialogFacade extends ISegregation<string>, IActionSheet {
  closingActions?: JSX.Element;
  triggerClassName: string;
  triggerContent: JSX.Element;
  toggleActionSheet?: () => void;
}

const DialogFacade: ParentComponent<IDialogFacade> = (props) => {
  const handleOpenChange = () => {
    props.toggleActionSheet?.();
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <Dialog.Trigger type="button" class={props.triggerClassName}>
        {props.triggerContent}
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogContent isFullScreen={props.isFullScreen} childClassName={props.childClassName}>
          <div class="flex justify-between items-center">
            <Dialog.Title class="subtitle card-header">{props.title}</Dialog.Title>

            <Dialog.CloseButton type="button" class={ShapeIcon.Default}>
              <CloseIcon />
            </Dialog.CloseButton>
          </div>

          <Dialog.Description class="info">{props.description}</Dialog.Description>

          {props.children}

          <div class="flex gap justify-between closing-actions">{props.closingActions}</div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog>
  );
};

export default DialogFacade;
