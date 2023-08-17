import { ParentComponent, Accessor } from 'solid-js';
import { computePosition, offset } from '@floating-ui/dom';

import { ActionTypes } from '../../models/config';

import { HelpTooltipType, hideBlock, showBlock } from './HelpTooltip';

interface TooltipType<T> extends HelpTooltipType {
  onClose: () => void;
  onClick: () => Promise<void>;
  snackbar: Accessor<T>;
}

const Tooltip: ParentComponent<TooltipType<string>> = (props) => {
  const { children, id, onClick, name, onClose, snackbar } = props;

  let tooltip: HTMLButtonElement;
  let button: HTMLButtonElement;

  const updateTooltip = () => {
    computePosition(button, tooltip, {
      middleware: [offset(4)],
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  };

  const handleDisplay = () => {
    showBlock(tooltip);
    updateTooltip();
  };

  const handleResetTooltip = () => {
    hideBlock(tooltip);
    onClose();
  };

  const handleClick = async () => {
    await onClick();

    updateTooltip();
  };

  return (
    <div class='snackbar'>
      <span role='tooltip' id={id} class='tooltip chip' ref={tooltip!}>
        {snackbar()}
      </span>

      <button
        type='button'
        ref={button!}
        class={ActionTypes.ShapeIcon}
        aria-label={name}
        aria-describedby={id}
        onClick={handleClick}
        onFocusIn={handleDisplay}
        onMouseEnter={handleDisplay}
        onMouseLeave={handleResetTooltip}
        onFocusOut={handleResetTooltip}
      >
        {children}
      </button>
    </div>
  );
};

export default Tooltip;
