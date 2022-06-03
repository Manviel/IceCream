import type { Component } from "solid-js";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";

import SuperEllipse from "./components/Superellipse";

const App: Component = () => {
  return (
    <footer class="dock content-full flex justify-between">
      <SuperEllipse name="Finder" />
      <SuperEllipse name="Store" />
      <SuperEllipse name="Settings" />
      <SuperEllipse name="Messages" />
    </footer>
  );
};

export default App;
