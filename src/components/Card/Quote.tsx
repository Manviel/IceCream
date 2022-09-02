import { Component, createResource, ErrorBoundary, Show } from 'solid-js';

import Loader from '../Loader';

import { SuperEllipse } from '../../models/config';
import { getQuote } from '../../services/news';

import GoForwardIcon from '../../assets/icons/go-forward.svg';

type QuoteType = {
  quote: string;
  character: string;
  anime: string;
};

const fetchQuote = async () => await getQuote();

const Quote: Component = () => {
  const [quote, { refetch }] = createResource<QuoteType>(fetchQuote);

  return (
    <ErrorBoundary
      fallback={<h2 class='token view rounded screen'>Failed to fetch</h2>}
    >
      {quote.loading && <Loader />}

      <Show when={quote()}>
        {(res) => (
          <article class='token view rounded screen'>
            <div class='flex justify-between items-center'>
              <p class='flex col'>
                <span>{res.anime}</span>
                <span class='box-description'>{res.character}</span>
              </p>

              <button
                class={SuperEllipse}
                onClick={refetch}
                aria-label='Get new quote'
              >
                <GoForwardIcon />
              </button>
            </div>

            <h2 class='box view rounded screen'>{res.quote}</h2>
          </article>
        )}
      </Show>
    </ErrorBoundary>
  );
};

export default Quote;
