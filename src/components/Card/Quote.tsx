import {
  Component,
  createResource,
  ErrorBoundary,
  Show,
  ParentComponent,
} from 'solid-js';

import Loader from '../Loader';

import { SuperEllipse } from '../../models/config';
import { SegregationType } from '../../models';
import { getQuote } from '../../services/news';

import GoForwardIcon from '../../assets/icons/go-forward.svg';

type QuoteType = {
  quote: string;
  character: string;
  anime: string;
};

interface QuoteViewType extends SegregationType {
  author: string;
}

const fetchQuote = async () => await getQuote();

const QuoteView: ParentComponent<QuoteViewType> = (props) => {
  const { title, description, author, children } = props;

  return (
    <article class='material view rounded'>
      <div class='flex justify-between items-center'>
        <blockquote class='flex col'>
          <span>{title}</span>
          <strong class='box-description'>{author}</strong>
        </blockquote>

        {children}
      </div>

      <h2 class='box view rounded screen'>{description}</h2>
    </article>
  );
};

const Quote: Component = () => {
  const [quote, { refetch }] = createResource<QuoteType>(fetchQuote);

  return (
    <ErrorBoundary
      fallback={<h2 class='material view rounded'>Failed to fetch</h2>}
    >
      {quote.loading && <Loader />}

      <Show when={quote()} keyed>
        {(res) => (
          <QuoteView
            title={res.anime}
            author={res.character}
            description={res.quote}
          >
            <button
              class={SuperEllipse}
              onClick={refetch}
              aria-label='Get new quote'
            >
              <GoForwardIcon />
            </button>
          </QuoteView>
        )}
      </Show>
    </ErrorBoundary>
  );
};

export default Quote;
