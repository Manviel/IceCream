import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

type HeaderType = {
  href?: string;
};

function Header({ href }: HeaderType): JSX.Element {
  return (
    <nav className="flex content-full justify-between">
      <Link
        href={href ? href : "/"}
        className="link btn rounded icon flex col"
        aria-label={href ? "Go back" : "Go home"}
      >
        <span className="line dark"></span>
        <span className="line dark"></span>
      </Link>

      <button className="btn rounded dark">Join Now</button>
    </nav>
  );
}

export default Header;
