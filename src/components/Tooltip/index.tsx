import { ParentComponent, Accessor } from 'solid-js';
import { Tooltip } from '@kobalte/core/tooltip';

import { ShapeIcon } from '../../global/theme';

import { IHelpTooltip } from './HelpTooltip';

interface ITooltip<T> extends IHelpTooltip {
  onClick: () => Promise<void>;
  snackbar: Accessor<T>;
  class?: string;
}

const FloatingTooltip: ParentComponent<ITooltip<string>> = props => {
  const handleClick = async () => {
    await props.onClick();
  };

  return (
    <Tooltip openDelay={0}>
      <Tooltip.Portal>
        <Tooltip.Content class="tooltip vibrancy chip">{props.snackbar()}</Tooltip.Content>
      </Tooltip.Portal>

      <Tooltip.Trigger type="button" class={props.class ?? ShapeIcon.Default} aria-label={props.name} onClick={handleClick}>
        {props.children}
      </Tooltip.Trigger>
    </Tooltip>
  );
};

export default FloatingTooltip;
