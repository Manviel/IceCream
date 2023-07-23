import { ParentComponent } from 'solid-js';
import { NavLink } from '@solidjs/router';

import { IDType } from '../../models';
import { ActionTypes } from '../../models/config';

interface TabLinkType extends IDType {
  href: string;
  end?: boolean;
}

const TabLink: ParentComponent<TabLinkType> = ({ href, id, children, end }) => (
  <NavLink
    href={href}
    end={end}
    class='flex col items-center tab'
    aria-label={id}
  >
    <div class={ActionTypes.SuperEllipse}>{children}</div>

    <small class='tab-link'>{id}</small>
  </NavLink>
);

export default TabLink;
