import { createResource, Switch, Match, For } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import { getCompanies } from "../../services/company";

import Card from "../../components/Card";
import SuperEllipse from "../../components/Superellipse";
import Loader from "../../components/Loader";

import "./Profile.css";

type Company = {
  _id: string;
  name: string;
  description: string;
  number_of_employees: number;
  total_money_raised: string;
  founded_year: number;
  category_code: string;
  twitter_username: string;
  updated_at: string;
};

const fetchQuery = async () => await getCompanies({ page: 0, limit: 4 });

const [companies] = createResource(fetchQuery);

function Profile(): JSX.Element {
  const extractMonth = (str: string) =>
    new Date(str).toDateString().slice(4, 7);

  return (
    <article class="page profile-page flex col start">
      <Link
        href="/"
        className="link btn primary icon flex items-center justify-center"
      >
        <i className="arrow-right"></i>
      </Link>

      <h1 className="bar subtitle bold">Your Profile</h1>

      <header className="flex bar">
        <Card number="Today" description="126 Views" />

        <Card number="6" description="Messages" />
      </header>

      <h2 className="bar subtitle bold">Your Applications</h2>

      <Switch fallback={"Failed to load"}>
        <Match when={companies.loading}>
          <Loader />
        </Match>
        <Match when={companies.error}>Something Went Wrong</Match>
        <Match when={companies()}>
          {(list: Company[]) => (
            <For each={list}>
              {(com) => (
                <div className="card content-full">
                  <SuperEllipse name="Logo" />

                  <p className="bar card-description">
                    {com.description || com.category_code}
                  </p>

                  <h2 className="card-title bold">{com.name}</h2>

                  <header className="flex bar justify-between items-center">
                    <Card
                      number={com.total_money_raised}
                      description={`${com.number_of_employees || 0} employees`}
                    />

                    <div>
                      <p className="card-description">
                        {extractMonth(com.updated_at)}
                      </p>

                      <h4 className="subtitle bold">
                        {new Date(com.updated_at).getDate()}
                      </h4>
                    </div>
                  </header>

                  <Card
                    number={com.founded_year}
                    description={com.twitter_username}
                  />
                </div>
              )}
            </For>
          )}
        </Match>
      </Switch>

      <footer className="flex justify-center content-full">
        <button className="btn dark dark-btn">Show Other Results</button>
      </footer>
    </article>
  );
}

export default Profile;
