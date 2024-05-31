import { Entity } from '../models';

type ContextState = {
  url: string;
};

const defaultState = new WeakMap();

export const useCacheStore = () => {
  const setStore = (requestKey: ContextState, data: Entity) =>
    defaultState.set(requestKey, data);

  const getStore = (requestKey: ContextState) => {
    if (defaultState.has(requestKey)) {
      return defaultState.get(requestKey);
    }
  };

  return {
    setStore,
    getStore,
  };
};
