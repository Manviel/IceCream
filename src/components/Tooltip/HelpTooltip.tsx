import { ParentComponent } from 'solid-js';

import './Tooltip.css';

export interface IHelpTooltip {
  name: string;
}

const HelpTooltip: ParentComponent<IHelpTooltip> = props => {
  return (
    <div class="content-full content-tall" role="img" aria-label={props.name} title={props.name}>
      {props.children}
    </div>
  );
};

export default HelpTooltip;
