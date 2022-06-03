import type { Component } from "solid-js";

import "./SuperEllipse.css";

type EllipseType = {
  name: string;
};

const SuperEllipse: Component<EllipseType> = ({ name }) => {
  return (
    <span class="superellipse flex items-center justify-center" tabIndex="0">
      {name}
    </span>
  );
};

export default SuperEllipse;
