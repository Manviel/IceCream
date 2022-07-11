import { Category } from '../models';

type PaginateType = {
  category: Category;
};

const headers = {
  'Content-Type': 'application/json',
  mode: 'no-cors',
};

export const getNews = async (params: PaginateType) => {
  const { category } = params;

  const response = await fetch(
    `https://inshorts.deta.dev/news?category=${category}`,
    {
      headers,
    }
  );

  const { data } = await response.json();

  return data;
};

export const getQuote = async () => {
  const response = await fetch(`https://api.quotable.io/random`, {
    headers,
  });

  const json = await response.json();

  return json;
};
