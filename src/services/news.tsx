import { Category } from '../models';

type PaginateType = {
  category: Category;
};

export const getNews = async (params: PaginateType) => {
  const { category } = params;

  const response = await fetch(
    `https://inshorts.deta.dev/news?category=${category}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const { data } = await response.json();

  return data;
};

export const getCompanyById = async (id: string) => {
  const response = await fetch(`http://localhost:3080/companies/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();

  return json;
};
