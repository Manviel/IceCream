import { sortByAsc } from './utils';

type PaginateType = {
  category: string;
};

const headers = {
  'Content-Type': 'application/json',
};

export const getNews = async (params: PaginateType) => {
  const { category } = params;

  const response = await fetch(
    `https://api.frankfurter.app/latest?from=${category}`,
    {
      headers,
    }
  );

  const { rates } = await response.json();

  return sortByAsc(rates);
};

export const getQuote = async () => {
  const response = await fetch(
    `https://uselessfacts.jsph.pl/api/v2/facts/random`,
    {
      headers,
    }
  );

  const json = await response.json();

  return json;
};

export const getUsers = async () => {
  const response = await fetch(`https://dummyjson.com/users`, {
    headers,
  });

  const { users } = await response.json();

  return users;
};
