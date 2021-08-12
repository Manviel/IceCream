import { createResource, Match, Switch } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

import { getCompanyById } from "../../services/company";

import Header from "../../components/Header";
import Card from "../../components/Card";
import CardDate from "../../components/Card/CardDate";
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
                <section className="flex stage justify-between items-center">
                  <SuperEllipse name={com.category_code} />

                  <CardDate date={com.updated_at} />
                </section>

                <p className="card-description details-list-item">
                  {com.description}
                </p>

                <h1 className="title">{com.name}</h1>

                <p className="bar card-description">{com.total_money_raised}</p>

                <section className="details-club" tabIndex="0">
                  <div className="flex details-flow">
                    {com.offices.map((office) => (
                      <Card
                        number={office.city}
                        description={office.country_code}
                      />
                    ))}
                  </div>

                  <p className="bar details-info" innerHTML={com.overview}></p>
                </section>

                <h2 class="bar subtitle">Media</h2>

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
                  <>
                    <h3 className="details-info bar">Company is valued at:</h3>

                    <article className="dock content-full flex justify-between items-center">
                      <SuperEllipse name={com.ipo.valuation_currency_code} />

                      <p className="stage-title">
                        {com.ipo.valuation_amount || 0}
                      </p>

                      <a
                        href={`https://www.google.com/search?q=${com.ipo.stock_symbol}`}
                        className="btn rounded dark"
                        target="_blank"
                        aria-label="Check stocks"
                      >
                        <i className="arrow arrow-right"></i>
                      </a>
                    </article>
                  </>
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
