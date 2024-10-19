import { ParentComponent, Accessor } from 'solid-js';
import { Tooltip } from '@kobalte/core/tooltip';

import { ShapeIcon } from '../../global/theme';

import { IHelpTooltip } from './HelpTooltip';

interface ITooltip<T> extends IHelpTooltip {
  onClick: () => Promise<void>;
  snackbar: Accessor<T>;
  className?: string;
}

const FloatingTooltip: ParentComponent<ITooltip<string>> = props => {
  const { children, name, onClick, snackbar, className = ShapeIcon.Default } = props;

  const handleClick = async () => {
    await onClick();
  };

  return (
    <Tooltip openDelay={0}>
      <Tooltip.Portal>
        <Tooltip.Content class="tooltip vibrancy chip">{snackbar()}</Tooltip.Content>
      </Tooltip.Portal>

      <Tooltip.Trigger type="button" class={className} aria-label={name} onClick={handleClick}>
        {children}
      </Tooltip.Trigger>
    </Tooltip>
  );
};

export default FloatingTooltip;
