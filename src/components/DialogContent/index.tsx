import { mergeProps, type ParentComponent } from 'solid-js';

import AbstractDialogContent from './AbstractDialogContent';

import './DialogContent.css';

export interface IActionSheet {
  isFullScreen?: boolean;
  childClassName?: string;
}

const DialogContent: ParentComponent<IActionSheet> = _props => {
  const props = mergeProps({ isFullScreen: false, childClassName: 'alert rounded' }, _props);

  return (
    <AbstractDialogContent
      isFullScreen={props.isFullScreen}
      childClassName={props.childClassName}
      factory={props.children}
    />
  );
};

export default DialogContent;
