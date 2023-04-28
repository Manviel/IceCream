import type { ParentComponent } from 'solid-js';

import AbstractDialogContent from './AbstractDialogContent';

import './DialogContent.css';

export interface ActionSheetType {
  parentClassName?: string;
  childClassName?: string;
}

const DialogContent: ParentComponent<ActionSheetType> = ({
  children,
  parentClassName = 'dialog',
  childClassName = 'view rounded alert',
}) => {
  return (
    <AbstractDialogContent
      parentClassName={parentClassName}
      childClassName={childClassName}
      factory={children}
    />
  );
};

export default DialogContent;
