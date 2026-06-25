import { openDB } from 'idb';

export const GACHA_DB_NAME = 'gacha';
export const GACHA_DB_VERSION = 1;
export const GACHA_STORE = 'state';
export const GACHA_KEY = 'current';

export interface GachaState {
  pullsRemaining: number;
  unlockedIds: string[];
  totalPulls: number;
}

let _db: ReturnType<typeof openDB> | null = null;

export const getGachaDB = () => {
  if (!_db) {
    _db = openDB(GACHA_DB_NAME, GACHA_DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(GACHA_STORE)) {
          db.createObjectStore(GACHA_STORE);
        }
      },
    });
  }

  return _db;
};

export const loadGachaState = async (): Promise<GachaState | undefined> => {
  try {
    const db = await getGachaDB();
    return await db.get(GACHA_STORE, GACHA_KEY);
  } catch (err) {
    console.error('Failed to load gacha state', err);
    return undefined;
  }
};

export const saveGachaState = async (state: GachaState): Promise<void> => {
  try {
    const db = await getGachaDB();
    await db.put(GACHA_STORE, state, GACHA_KEY);
  } catch (err) {
    console.error('Failed to save gacha state', err);
  }
};

export const clearGachaState = async (): Promise<void> => {
  try {
    const db = await getGachaDB();
    await db.delete(GACHA_STORE, GACHA_KEY);
  } catch (err) {
    console.error('Failed to clear gacha state', err);
  }
};
