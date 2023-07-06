import type { Component } from 'solid-js';

type HeaderType = {
  spot: string;
};

const Header: Component<HeaderType> = ({ spot }) => {
  return <h2 class='title'>{spot}</h2>;
};

export const SubTitle: Component<HeaderType> = ({ spot }) => {
  return <h3 class='subtitle card-navigation'>{spot}</h3>;
};

export default Header;
