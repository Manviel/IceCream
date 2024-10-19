import { Component, createSignal, onMount, ErrorBoundary, Show, ParentComponent } from 'solid-js';

import Loader from '../Loader';
import HelpTooltip from '../Tooltip/HelpTooltip';

import { ShapeIcon, getGroup } from '../../global/theme';
import { ISegregation } from '../../global';
import { getQuote } from '../../services/news';
import { useCacheStore } from '../../services/store';

import GoForwardIcon from '../../assets/icons/go-forward.svg';

type QuoteType = {
  source: string;
  text: string;
};

const QuoteView: ParentComponent<ISegregation<string>> = props => {
  const { title, description, children } = props;

  return (
    <section class="card view rounded">
      <div class={getGroup('layer items-center')}>
        <blockquote class="flex col gap">
          <strong class="subtitle">{title}</strong>
        </blockquote>

        {children}
      </div>

      <h3 class="box os provision term">{description}</h3>
    </section>
  );
};

const requestKey = { url: 'uselessfacts' };

const Quote: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [quote, setQuote] = createSignal<QuoteType>();

  const { getStore, setStore } = useCacheStore();

  const refetch = async () => {
    setLoading(true);

    try {
      const data = await getQuote();

      setQuote(data);
      setStore(requestKey, data);
    } catch (err) {
      console.error('Error fetching quote:', err);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    const requestCache = getStore(requestKey);

    if (requestCache) {
      setQuote(requestCache);

      return;
    }

    refetch();
  });

  return (
    <ErrorBoundary fallback={<h2 class="price view rounded">Failed to fetch</h2>}>
      {loading() && <Loader />}

      <Show when={quote()} keyed>
        {res => (
          <QuoteView title={res.source} description={res.text}>
            <button type="button" class={ShapeIcon.Default} onClick={refetch}>
              <HelpTooltip name="Get new quote">
                <GoForwardIcon />
              </HelpTooltip>
            </button>
          </QuoteView>
        )}
      </Show>
    </ErrorBoundary>
  );
};

export default Quote;
