import type { ParentComponent } from 'solid-js';

import AbstractDialogContent from './AbstractDialogContent';

import './DialogContent.css';

export interface ActionSheetType {
  isFullScreen?: boolean;
  childClassName?: string;
}

const DialogContent: ParentComponent<ActionSheetType> = ({
  children,
  isFullScreen = false,
  childClassName = 'alert rounded',
}) => {
  return (
    <AbstractDialogContent
      isFullScreen={isFullScreen}
      childClassName={childClassName}
      factory={children}
    />
  );
};

export default DialogContent;
