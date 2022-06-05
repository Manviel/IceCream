import type { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import './SuperEllipse.css';

type EllipseType = {
  children: JSX.Element;
};

const SuperEllipse: Component<EllipseType> = ({ children }) => {
  return (
    <span class='superellipse flex items-center justify-center'>
      {children}
    </span>
  );
};

export default SuperEllipse;
