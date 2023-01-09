import type { ParentComponent } from 'solid-js';

import AbstractDialogContent from './AbstractDialogContent';

import './DialogContent.css';

const DialogContent: ParentComponent = ({ children }) => {
  return (
    <AbstractDialogContent
      parentClassName='dialog'
      childClassName='depth view rounded alert'
      factory={children}
    />
  );
};

export default DialogContent;
