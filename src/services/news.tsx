import { Category } from '../models';

type PaginateType = {
  category: Category;
};

const headers = {
  'Content-Type': 'application/json',
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

export const getCompanyById = async (id: string) => {
  const response = await fetch(`http://localhost:3080/companies/${id}`, {
    headers,
  });

  const json = await response.json();

  return json;
};

export const getQuote = async () => {
  const response = await fetch(`https://api.quotable.io/random`, {
    headers,
  });

  const json = await response.json();

  return json;
};
