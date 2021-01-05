import { JSX } from "solid-js/jsx-runtime";
import { createContext, useContext } from "solid-js";

import createRouteHandler from "./router";

type RouteDefinition = {
  path?: string;
  children: JSX.Element;
};

type RouteOptions = {
  match: (name: string, test: RegExp) => boolean;
  getParams: () => {};
};

const RouterContext = createContext<RouteOptions>();

export function Provider(props: RouteDefinition) {
  const router = createRouteHandler();

  return (
    <RouterContext.Provider value={router}>
      {props.children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
