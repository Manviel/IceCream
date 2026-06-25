import { openDB } from 'idb';
import { createSignal } from 'solid-js';

export const LEVEL = 1;
export const DB_NAME = 'activities';
export const DB_STORE_TABLE = 'store';
export const DB_USERS_TABLE = 'users';
export const DB_LOGS_TABLE = 'logs';
export const DB_AUTH_KEY = 'authorized';
export const DB_AUTH_VALUE = 'true';

let _db: ReturnType<typeof openDB> | null = null;

export const getDB = () => {
  if (!_db) {
    _db = openDB(DB_NAME, LEVEL, {
      upgrade(db) {
        db.createObjectStore(DB_STORE_TABLE, {
          keyPath: 'ticker',
        });

        db.createObjectStore(DB_USERS_TABLE, {
          keyPath: 'email',
        });

        db.createObjectStore(DB_LOGS_TABLE, {
          keyPath: DB_AUTH_KEY,
        });
      },
    });
  }

  return _db;
};

export const checkAuthStatus = async (): Promise<boolean> => {
  try {
    const db = await getDB();
    const record = await db.get(DB_LOGS_TABLE, DB_AUTH_VALUE);
    return !!record;
  } catch {
    return false;
  }
};

export const useAuthorization = () => {
  const [isAuthed, setIsAuthed] = createSignal(false);

  const verifyStorage = async () => {
    setIsAuthed(await checkAuthStatus());
  };

  return {
    isAuthed,
    verifyStorage,
  };
};
