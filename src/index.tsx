import "solid-js";
import { render } from "solid-js/web";
import App from "./App";

import { Provider } from "./store";

import "./index.css";

render(
  () => (
    <Provider>
      <App />
    </Provider>
  ),
  document.getElementById("root") as Node
);
