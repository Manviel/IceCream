import type { Component } from 'solid-js';

import './Header.css';

type HeaderType = {
  spot: string;
};

const Header: Component<HeaderType> = ({ spot }) => {
  return <h1 class='title'>{spot}</h1>;
};

export default Header;
