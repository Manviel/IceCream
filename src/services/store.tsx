import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { Company } from '../models';

type NewsContextState = {
  readonly news: Company[];
};

type NewsContextValue = [
  state: NewsContextState,
  actions: {
    updateNews: (news: Company[]) => void;
  }
];

const defaultState = {
  news: [],
};

const NewsContext = createContext<NewsContextValue>([
  defaultState,
  {
    updateNews: () => undefined,
  },
]);

export const NewsProvider: ParentComponent<{ news?: Company[] }> = (props) => {
  const [state, setState] = createStore({
    news: props.news ?? defaultState.news,
  });

  const updateNews = (data: Company[]) => setState('news', data);

  return (
    <NewsContext.Provider
      value={[
        state,
        {
          updateNews,
        },
      ]}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
