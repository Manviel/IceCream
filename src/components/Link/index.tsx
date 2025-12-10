import { ParentComponent } from 'solid-js';
import { A } from '@solidjs/router';

import { IAnchor, IDType } from '../../global';
import { ActionTypes } from '../../global/theme';

interface ITabLink extends IDType, IAnchor {}

const TabLink: ParentComponent<ITabLink> = (props) => (
  <A href={props.href} end={props.end} class="flex col items-center tab" aria-label={props.id} title={props.id}>
    <div class={ActionTypes.SuperEllipse}>{props.children}</div>

    <small class="tab-link">{props.id}</small>
  </A>
);

export default TabLink;
