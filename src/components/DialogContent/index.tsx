import type { ParentComponent } from 'solid-js';

import AbstractDialogContent from './AbstractDialogContent';

import './DialogContent.css';

export interface IActionSheet {
  isFullScreen?: boolean;
  childClassName?: string;
}

const DialogContent: ParentComponent<IActionSheet> = ({
  children,
  isFullScreen = false,
  childClassName = 'alert rounded'
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
