import type { Component } from 'solid-js';

type HeaderType = {
  spot: string;
};

const Header: Component<HeaderType> = (props) => {
  return <h1 class='title'>{props.spot}</h1>;
};

export const SubTitle: Component<HeaderType> = (props) => {
  return <h3 class='subtitle card-header'>{props.spot}</h3>;
};

export default Header;
