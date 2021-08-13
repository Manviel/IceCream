import { createResource, Match, Switch } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

import Header from "../../components/Header";
import Card from "../../components/Card";
import CardDate from "../../components/Card/CardDate";
import SuperEllipse from "../../components/Superellipse";
import Loader from "../../components/Loader";

import { Company } from "../../models";

import { getCompanyById } from "../../services/company";
import { numberWithCommas } from "../../services/utils";

import "./Details.css";

type DetailsType = {
  id: string;
};

const fetchQuery = async (id: string) => await getCompanyById(id);

function Details({ id }: DetailsType): JSX.Element {
  const [company] = createResource(id, fetchQuery);

  return (
    <>
      <Header href="/profile" />

      <main
        class="page rounded content-full flex col justify-between"
        tabIndex="0"
      >
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

                  <CardDate date={com.updated_at} />
                </header>

                <p className="card-description details-list-item">
                  {com.description}
                </p>

                <h1 className="title">{com.name}</h1>

                <p className="bar card-description">{com.total_money_raised}</p>

                <div className="details-flow">
                  {com.offices.map((office) => (
                    <Card
                      number={office.city}
                      description={office.country_code}
                    />
                  ))}
                </div>

                <p className="bar details-info" innerHTML={com.overview}></p>

                <article className="tour rounded">
                  <ul className="flex wrap list tour-list">
                    {com.relationships.map(
                      (per) =>
                        per.title && (
                          <li tabIndex="0">
                            {per.title}:
                            <p className="tour-person">
                              {per.person.first_name} {per.person.last_name}
                            </p>
                          </li>
                        )
                    )}
                  </ul>
                </article>

                <article className="flex justify-between bar">
                  <aside>
                    <h2 class="bar subtitle">Media</h2>

                    <ul className="stage details-list">
                      {com.external_links.length > 0 ? (
                        com.external_links.map((extra) => (
                          <li className="details-list-item">
                            <a
                              href={extra.external_url}
                              target="_blank"
                              className="bar"
                            >
                              {extra.title}
                            </a>
                          </li>
                        ))
                      ) : (
                        <li className="details-list-item">
                          <a
                            href={com.blog_url}
                            target="_blank"
                            className="bar"
                          >
                            Blog
                          </a>
                        </li>
                      )}
                    </ul>
                  </aside>

                  <aside>
                    <h2 class="bar subtitle">Milestones</h2>

                    <ul className="stage details-list">
                      {com.milestones.map((mile) => (
                        <li className="details-list-item">
                          <a
                            href={mile.source_url}
                            target="_blank"
                            className="bar"
                          >
                            {mile.description}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </article>

                {com.ipo && (
                  <article className="flex justify-center">
                    <aside className="dock content-full flex justify-between items-center">
                      <SuperEllipse name={com.ipo.stock_symbol} />

                      <p className="stage-title">
                        Company Value:{" "}
                        {numberWithCommas(com.ipo.valuation_amount) || 0}{" "}
                        {com.ipo.valuation_currency_code}
                      </p>

                      <a
                        href={`https://www.google.com/search?q=${com.ipo.stock_symbol}`}
                        className="btn rounded dark"
                        target="_blank"
                        aria-label="Check stocks"
                      >
                        <i className="arrow arrow-right"></i>
                      </a>
                    </aside>
                  </article>
                )}
              </>
            )}
          </Match>
        </Switch>
      </main>
    </>
  );
}

export default Details;
