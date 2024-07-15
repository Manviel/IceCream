import { ParentComponent } from 'solid-js';
import { A } from '@solidjs/router';

import { AnchorType, IDType } from '../../global';
import { ActionTypes } from '../../global/theme';

interface TabLinkType extends IDType, AnchorType {}

const TabLink: ParentComponent<TabLinkType> = ({ href, id, children, end }) => (
  <A href={href} end={end} class="flex col items-center tab" aria-label={id} title={id}>
    <div class={ActionTypes.SuperEllipse}>{children}</div>

    <small class="tab-link">{id}</small>
  </A>
);

export default TabLink;
