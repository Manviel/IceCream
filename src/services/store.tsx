import {
  createContext,
  useContext,
  ParentComponent,
  createMemo,
} from 'solid-js';
import { createStore } from 'solid-js/store';

import { Entity } from '../models';
import { Category } from '../models/config';

type NewsContextState = {
  readonly news: Entity[];
  readonly currentRank: string;
};

type NewsContextValue = [
  state: NewsContextState,
  actions: {
    updateNews: (news: Entity[]) => void;
  }
];

const defaultState = {
  news: [],
  currentRank: Category,
};

const NewsContext = createContext<NewsContextValue>([
  defaultState,
  {
    updateNews: () => undefined,
  },
]);

export const NewsProvider: ParentComponent<NewsContextState> = (props) => {
  const [state, setState] = createStore({
    news: props.news ?? defaultState.news,
    currentRank: defaultState.currentRank,
  });

  const updateNews = (data: Entity[]) => setState('news', data);

  const contextValue = createMemo<NewsContextValue>(() => [
    state,
    { updateNews },
  ]);

  return (
    <NewsContext.Provider value={contextValue()}>
      {props.children}
    </NewsContext.Provider>
  );
};

export const useNewsStore = () => useContext(NewsContext);
