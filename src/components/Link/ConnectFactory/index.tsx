import { mergeProps, type Component } from 'solid-js';

import { IAnchor } from '../../../global';

interface IConnectFactory extends IAnchor {
  text?: string;
}

const ConnectFactory: Component<IConnectFactory> = _props => {
  const props = mergeProps({ text: 'Watch Now', end: true }, _props);

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      class="connect"
      classList={{ concise: props.end }}
    >
      {props.text}
    </a>
  );
};

export default ConnectFactory;
