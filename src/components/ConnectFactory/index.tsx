import type { Component } from 'solid-js';

type ConnectFactoryType = {
  href: string;
  text?: string;
};

const ConnectFactory: Component<ConnectFactoryType> = ({
  href,
  text = 'Watch Now',
}) => (
  <a href={href} target='_blank' rel='noopener noreferrer' class='connect'>
    {text}
  </a>
);

export default ConnectFactory;
