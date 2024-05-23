type PaginateType = {
  category: string;
};

const headers = {
  'Content-Type': 'application/json',
};

const BASE_URL = 'https://dummyjson.com';

export const getNews = async (params: PaginateType) => {
  const { category } = params;

  const response = await fetch(`${BASE_URL}/products/category/${category}`, {
    headers,
  });

  const { products } = await response.json();

  return products;
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
  const response = await fetch(`${BASE_URL}/users`, {
    headers,
  });

  const { users } = await response.json();

  return users;
};
