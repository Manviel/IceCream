import { JSX } from "solid-js/jsx-runtime";

import "./Loader.css";

function Loader(): JSX.Element {
  return (
    <div className="card rounded content-full pulse-loading">
      <p className="bar rounded card-description"></p>
      <p className="bar rounded card-description"></p>
    </div>
  );
}

export default Loader;
