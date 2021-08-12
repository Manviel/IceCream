import { Switch } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { MatchRoute } from "@rturnq/solid-router";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";

import SuperEllipse from "./components/Superellipse";

function App(): JSX.Element {
  return (
    <>
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

      <footer className="dock content-full flex justify-between">
        <SuperEllipse name="Finder" />
        <SuperEllipse name="Store" />
        <SuperEllipse name="Settings" />
        <SuperEllipse name="Messages" />
      </footer>
    </>
  );
}

export default App;
