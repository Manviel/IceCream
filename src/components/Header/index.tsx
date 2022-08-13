import type { Component } from 'solid-js';

type HeaderType = {
  spot: string;
};

const Header: Component<HeaderType> = ({ spot }) => {
  return <h1 class='title'>{spot}</h1>;
};

export default Header;
