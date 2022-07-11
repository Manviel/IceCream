import type { Component } from 'solid-js';

type ConnectFactoryType = {
  href: string;
};

const ConnectFactory: Component<ConnectFactoryType> = ({ href }) => (
  <a href={href} target='_blank' rel='noopener noreferrer' class='connect'>
    Learn more
  </a>
);

export default ConnectFactory;
