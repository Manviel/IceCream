import "solid-js";
import { render } from "solid-js/web";
import { Router, pathIntegration } from "@rturnq/solid-router";

import App from "./App";

import "./index.css";

render(
  () => (
    <Router integration={pathIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById("root") as Node
);
