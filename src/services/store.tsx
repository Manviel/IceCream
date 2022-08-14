import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { Entity, LeagueUnion } from '../models';
import { Category } from '../models/config';
import { getEnumKeyByEnumValue, getRandomEnum } from './utils';

type NewsContextState = {
  readonly news: Entity[];
  readonly currentRank: string;
  readonly currentLeague: LeagueUnion;
};

type NewsContextValue = [
  state: NewsContextState,
  actions: {
    updateNews: (news: Entity[]) => void;
  }
];

const newRank = getRandomEnum(Category);

const defaultState = {
  news: [],
  currentRank: newRank,
  currentLeague: getEnumKeyByEnumValue(Category, newRank),
};

const NewsContext = createContext<NewsContextValue>([
  defaultState,
  {
    updateNews: () => undefined,
  },
]);

export const NewsProvider: ParentComponent<{
  news?: Entity[];
}> = (props) => {
  const [state, setState] = createStore({
    news: props.news ?? defaultState.news,
    currentRank: defaultState.currentRank,
    currentLeague: defaultState.currentLeague,
  });

  const updateNews = (data: Entity[]) => setState('news', data);

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
