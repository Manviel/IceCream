import { createResourceState, createComputed, Switch, Match } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import { getCompanies } from "../../services/company";

import Card from "../../components/Card";

import "./Profile.css";

type Company = {
  _id: string;
  name: string;
};

type Response = {
  companies: Company[];
};

const fetchUser = () => () =>
  getCompanies({ page: 0, limit: 4 }).then((r) => r);

const [state, load] = createResourceState<Response>({ companies: [] });

createComputed(() =>
  load({
    companies: fetchUser(),
  })
);

function Profile(): JSX.Element {
  return (
    <article class="flex col start">
      <Link href="/" className="link btn icon bar">
        <i className="arrow-right"></i>
      </Link>

      <h2 className="bar bold subtitle">Choose Your CSV</h2>

      <header className="flex bar">
        <Card number="Today" description="126 Views" />
      </header>

      <Switch fallback={"Failed to load User"}>
        <Match when={state.loading.companies}>Loading...</Match>
        <Match when={state.companies}>{(c) => <p>{c.name}</p>}</Match>
      </Switch>
    </article>
  );
}

export default Profile;
