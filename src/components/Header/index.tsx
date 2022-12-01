import type { Component } from 'solid-js';

type HeaderType = {
  spot: string;
};

const Header: Component<HeaderType> = ({ spot }) => {
  return <h2 class='title'>{spot}</h2>;
};

export default Header;
