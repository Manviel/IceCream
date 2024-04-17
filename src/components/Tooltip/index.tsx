import { ParentComponent, Accessor } from 'solid-js';
import { Tooltip } from '@ark-ui/solid';
import { Portal } from 'solid-js/web';

import { ShapeIcon } from '../../models/theme';

import { HelpTooltipType } from './HelpTooltip';

interface TooltipType<T> extends HelpTooltipType {
  onClick: () => Promise<void>;
  snackbar: Accessor<T>;
  className?: string;
}

const FloatingTooltip: ParentComponent<TooltipType<string>> = (props) => {
  const {
    children,
    name,
    onClick,
    snackbar,
    className = ShapeIcon.Default,
  } = props;

  const handleClick = async () => {
    await onClick();
  };

  return (
    <Tooltip.Root openDelay={0} closeDelay={0}>
      <Portal>
        <Tooltip.Positioner class='snackbar'>
          <Tooltip.Content class='tooltip vibrancy chip'>
            {snackbar()}
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>

      <Tooltip.Trigger
        type='button'
        class={className}
        aria-label={name}
        onClick={handleClick}
      >
        {children}
      </Tooltip.Trigger>
    </Tooltip.Root>
  );
};

export default FloatingTooltip;
