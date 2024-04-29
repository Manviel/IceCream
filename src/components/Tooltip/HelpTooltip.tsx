import { ParentComponent } from 'solid-js';

import './Tooltip.css';

export interface HelpTooltipType {
  name: string;
}

const HelpTooltip: ParentComponent<HelpTooltipType> = (props) => {
  const { children, name } = props;

  return (
    <div
      class='content-full content-tall'
      role='img'
      aria-label={name}
      title={name}
    >
      {children}
    </div>
  );
};

export default HelpTooltip;
