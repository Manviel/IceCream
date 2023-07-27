import type { Component } from 'solid-js';

import { AnchorType } from '../../../models';

interface ConnectFactoryType extends AnchorType {
  text?: string;
}

const ConnectFactory: Component<ConnectFactoryType> = ({
  href,
  text = 'Watch Now',
  end = true,
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    class='connect'
    classList={{ concise: end }}
  >
    {text}
  </a>
);

export default ConnectFactory;
