import { Switch } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { MatchRoute } from "@rturnq/solid-router";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";

function App(): JSX.Element {
  return (
    <div class="app">
      <Switch>
        <MatchRoute end>
          <Home />
        </MatchRoute>
        <MatchRoute path="profile">
          <Profile />
        </MatchRoute>
        <MatchRoute path="company/:id">
          {(route) => <Details id={route.params.id} />}
        </MatchRoute>
      </Switch>
    </div>
  );
}

export default App;
