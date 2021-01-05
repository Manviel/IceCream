import { createSignal, onCleanup, useTransition } from "solid-js";

function createRouteHandler() {
  const [location, setLocation] = createSignal(window.location.hash.slice(2));

  const [read, triggerParams] = createSignal();
  const [, start] = useTransition();

  const locationHandler = () =>
    start(() => setLocation(window.location.hash.slice(2)));

  let params: {};

  window.addEventListener("hashchange", locationHandler);

  onCleanup(() => window.removeEventListener("hashchange", locationHandler));

  return {
    location,
    match: (name: string, test: RegExp) => {
      const loc = location().split("?")[0];
      const match = test.exec(loc);
      if (match) {
        params = { params: match.slice(1), routeName: name };
        triggerParams();
      }
      return !!match;
    },
    getParams: () => (read(), params),
  };
}

export default createRouteHandler;
