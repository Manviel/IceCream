import { JSX } from "solid-js/jsx-runtime";

import "./SuperEllipse.css";

type EllipseType = {
  name: string;
};

function SuperEllipse({ name }: EllipseType): JSX.Element {
  return (
    <span className="superellipse flex items-center justify-center">
      {name}
    </span>
  );
}

export default SuperEllipse;
