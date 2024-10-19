import type { Component } from 'solid-js';

import { IAnchor } from '../../../global';

interface IConnectFactory extends IAnchor {
  text?: string;
}

const ConnectFactory: Component<IConnectFactory> = ({ href, text = 'Watch Now', end = true }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    class="connect"
    classList={{ concise: end }}
  >
    {text}
  </a>
);

export default ConnectFactory;
