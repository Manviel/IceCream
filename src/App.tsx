import { Switch, Match } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

import { useRouter } from "./store";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App(): JSX.Element {
  const { match } = useRouter();

  return (
    <div class="app">
      <Switch>
        <Match when={match("", /^#?$/)}>
          <Home />
        </Match>
        <Match when={match("profile", /^profile/)}>
          <Profile />
        </Match>
      </Switch>
    </div>
  );
}

export default App;
