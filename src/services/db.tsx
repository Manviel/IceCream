import { openDB } from 'idb';

export const LEVEL = 1;
export const DB_NAME = 'activities';
export const DB_STORE_TABLE = 'store';
export const DB_USERS_TABLE = 'users';

export const useDataBase = async () => {
  const db = await openDB(DB_NAME, LEVEL, {
    upgrade(db) {
      db.createObjectStore(DB_STORE_TABLE, {
        keyPath: 'ticker',
      });

      db.createObjectStore(DB_USERS_TABLE, {
        keyPath: 'email',
      });
    },
  });

  return db;
};
