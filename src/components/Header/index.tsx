import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

function Header(): JSX.Element {
  return (
    <header className="flex content-full justify-between">
      <Link
        href="/"
        className="link btn rounded icon flex col"
        aria-label="Go home"
      >
        <span className="line dark"></span>
        <span className="line dark"></span>
      </Link>

      <button className="btn rounded dark">Join Now</button>
    </header>
  );
}

export default Header;
