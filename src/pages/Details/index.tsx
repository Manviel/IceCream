import { createResource, Match, Switch } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import { getCompanyById } from "../../services/company";

import Card from "../../components/Card";
import SuperEllipse from "../../components/Superellipse";
import Loader from "../../components/Loader";

import { Company } from "../../models";

import "./Details.css";

type DetailsType = {
  id: string;
};

const fetchQuery = async (id: string) => await getCompanyById(id);

function Details({ id }: DetailsType): JSX.Element {
  const [company] = createResource(id, fetchQuery);

  const extractMonth = (str: string) =>
    new Date(str).toDateString().slice(4, 7);

  return (
    <article class="page content-full flex col justify-between">
      <Link
        href="/profile"
        className="link stage btn icon flex items-center justify-center"
      >
        <i className="arrow arrow-left"></i>
      </Link>

      <Switch fallback={"Failed to load"}>
        <Match when={company.loading}>
          <Loader />
        </Match>
        <Match when={company.error}>Something Went Wrong</Match>
        <Match when={company()}>
          {(com: Company) => (
            <>
              <header className="flex stage justify-between items-center">
                <SuperEllipse name={com.category_code} />

                <div>
                  <p className="details-description">
                    {extractMonth(com.updated_at)}
                  </p>

                  <h4 className="subtitle">
                    {new Date(com.updated_at).getDate()}
                  </h4>
                </div>
              </header>

              <p className="details-description details-list-item">
                {com.description}
              </p>

              <h1 className="title">{com.name}</h1>

              <p className="bar details-description">
                {com.total_money_raised}
              </p>

              <section className="details-club">
                <div className="flex details-flow">
                  {com.offices.map((office) => (
                    <Card
                      number={office.city}
                      description={office.country_code}
                    />
                  ))}
                </div>
              </section>

              <div className="bar details-info" innerHTML={com.overview}></div>

              <h1 class="bar subtitle">Media</h1>

              <ul className="stage details-list">
                {com.external_links.map((extra) => (
                  <li className="details-list-item">
                    <a
                      href={extra.external_url}
                      target="_blank"
                      className="bar"
                    >
                      {extra.title}
                    </a>
                  </li>
                ))}
              </ul>

              {com.ipo && (
                <main className="dock content-full stage flex justify-between items-center">
                  <SuperEllipse name={com.ipo.valuation_currency_code} />

                  <p className="stage-title">{com.ipo.valuation_amount}</p>

                  <a
                    href={`https://www.google.com/search?q=${com.ipo.stock_symbol}`}
                    className="btn dark"
                    target="_blank"
                  >
                    <i className="arrow arrow-right"></i>
                  </a>
                </main>
              )}
            </>
          )}
        </Match>
      </Switch>
    </article>
  );
}

export default Details;
