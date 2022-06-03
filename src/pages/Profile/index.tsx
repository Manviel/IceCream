import { createResource, createSignal, Switch, Match, For } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { Link } from "solid-app-router";

import { getCompanies } from "../../services/company";
import { randomInRange } from "../../services/utils";

import Card from "../../components/Card";
import CardDate from "../../components/Card/CardDate";
import Loader from "../../components/Loader";
import Header from "../../components/Header";

import { Company } from "../../models";

import "./Profile.css";

const DATA_STEP = 4;

const fetchQuery = async (page: number) =>
  await getCompanies({ page, limit: DATA_STEP });

function Profile(): JSX.Element {
  const [getState, setState] = createSignal(0);

  const [companies] = createResource(getState, fetchQuery);

  const loadCompanies = () => setState(getState() + 1);

  return (
    <>
      <Header />

      <main class="page rounded content-full flex col" tabIndex="0">
        <h1 className="subtitle">Your Applications: {getState()}</h1>

        <section className="bar" role="list">
          <Switch fallback={"Failed to load"}>
            <Match when={companies.loading}>
              <Loader />
            </Match>
            <Match when={companies.error}>Something Went Wrong</Match>
            <Match when={companies()}>
              {(list: Company[]) => (
                <For each={list}>
                  {(com) => (
                    <Link
                      href={`/company/${com._id}`}
                      role="listitem"
                      className="card rounded content-full"
                    >
                      <p className="bar card-description">
                        {com.description || com.category_code}
                      </p>

                      <h3 className="card-title">{com.name}</h3>

                      <article className="flex wrap bar justify-between items-center">
                        <Card
                          number={com.total_money_raised}
                          description={`Raised funds`}
                        />

                        <Card
                          number={com.number_of_employees || 0}
                          description="Employees"
                        />

                        <CardDate date={com.updated_at} />
                      </article>

                      <Card
                        number={`Founded in ${
                          com.founded_year ||
                          new Date(com.created_at).getFullYear()
                        }`}
                        description={`Contact via ${com.email_address}`}
                      />
                    </Link>
                  )}
                </For>
              )}
            </Match>
          </Switch>
        </section>

        <section className="flex justify-center content-full">
          <button className="btn rounded dark" onClick={loadCompanies}>
            Show Other Results
          </button>
        </section>
      </main>
    </>
  );
}

export default Profile;
