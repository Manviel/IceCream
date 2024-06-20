import { Entity } from '../models';

const defaultState = new WeakMap();

export const useCacheStore = () => {
  const setStore = (requestKey: WeakKey, data: Entity) =>
    defaultState.set(requestKey, data);

  const getStore = (requestKey: WeakKey) => {
    if (defaultState.has(requestKey)) {
      return defaultState.get(requestKey);
    }
  };

  return {
    setStore,
    getStore,
  };
};
