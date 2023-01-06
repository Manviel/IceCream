import { sortByAsc } from './utils';

type PaginateType = {
  category: string;
};

const headers = {
  'Content-Type': 'application/json',
  mode: 'no-cors',
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
  const response = await fetch(`https://animechan.vercel.app/api/random`, {
    headers,
  });

  const json = await response.json();

  return json;
};
