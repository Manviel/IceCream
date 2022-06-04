import type { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import BagIcon from '../../assets/icons/bag.svg';

import './Header.css';

type HeaderType = {
  href?: string;
};

const Header: Component<HeaderType> = ({ href }) => {
  return (
    <nav class='flex content-full justify-between'>
      <Link
        href={href ? href : '/'}
        class='link btn'
        aria-label={href ? 'Go back' : 'Go home'}
      >
        <BagIcon />
      </Link>

      <button class='btn'>Join Now</button>
    </nav>
  );
};

export default Header;
