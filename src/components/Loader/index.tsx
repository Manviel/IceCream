import { JSX } from "solid-js/jsx-runtime";

import "./Loader.css";

function Loader(): JSX.Element {
  return (
    <div className="card content-full pulse-loading">
      <p className="bar card-description"></p>
      <p className="bar card-description"></p>
    </div>
  );
}

export default Loader;
