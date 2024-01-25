import { ParentComponent } from 'solid-js';
import { A } from '@solidjs/router';

import { AnchorType, IDType } from '../../models';
import { ActionTypes } from '../../models/config';

interface TabLinkType extends IDType, AnchorType {}

const TabLink: ParentComponent<TabLinkType> = ({ href, id, children, end }) => (
  <A href={href} end={end} class='flex col items-center tab' aria-label={id}>
    <div class={ActionTypes.SuperEllipse}>{children}</div>

    <small class='tab-link'>{id}</small>
  </A>
);

export default TabLink;
