import { JSX } from "solid-js/jsx-runtime";

import "./SuperEllipse.css";

type EllipseType = {
  name: string;
};

function SuperEllipse({ name }: EllipseType): JSX.Element {
  return (
    <li className="superellipse">
      <span>{name}</span>
    </li>
  );
}

export default SuperEllipse;
