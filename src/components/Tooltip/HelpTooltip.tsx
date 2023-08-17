import { ParentComponent } from 'solid-js';
import { computePosition, offset } from '@floating-ui/dom';

import { IDType } from '../../models';

import './Tooltip.css';

export interface HelpTooltipType extends IDType {
  name: string;
}

export const showBlock = (block: HTMLButtonElement) =>
  (block.style.display = 'block');

export const hideBlock = (block: HTMLButtonElement) =>
  (block.style.display = '');

const HelpTooltip: ParentComponent<HelpTooltipType> = (props) => {
  const { children, id, name } = props;

  let tooltip: HTMLButtonElement;
  let button: HTMLDivElement;

  const updateTooltip = () => {
    computePosition(button, tooltip, {
      middleware: [offset(8)],
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

  const handleResetTooltip = () => hideBlock(tooltip);

  return (
    <div
      class='snackbar content-full content-tall'
      role='img'
      aria-label={name}
    >
      <span role='tooltip' id={id} class='tooltip chip' ref={tooltip!}>
        {name}
      </span>

      <div
        ref={button!}
        onMouseEnter={handleDisplay}
        onMouseLeave={handleResetTooltip}
      >
        {children}
      </div>
    </div>
  );
};

export default HelpTooltip;
