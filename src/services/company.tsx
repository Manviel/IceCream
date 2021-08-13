type PaginateType = {
  page: number;
  limit: number;
};

export const getCompanies = async (params: PaginateType) => {
  const { page, limit } = params;

  const response = await fetch(
    `http://localhost:3080/companies?page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const json = await response.json();

  return json;
};

export const getCompanyById = async (id: string) => {
  const response = await fetch(`http://localhost:3080/companies/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  return json;
};
