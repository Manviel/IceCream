import type { Component } from 'solid-js';

type HeaderType = {
  spot: string;
};

const Header: Component<HeaderType> = ({ spot }) => {
  return <h1 class='title'>{spot}</h1>;
};

export const SubTitle: Component<HeaderType> = ({ spot }) => {
  return <h3 class='subtitle card-header'>{spot}</h3>;
};

export default Header;
