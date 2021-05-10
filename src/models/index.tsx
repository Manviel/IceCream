type Office = {
  city: string;
  country_code: string;
};

type External = {
  external_url: string;
  title: string;
};

type IPO = {
  stock_symbol: string;
  valuation_currency_code: string;
  valuation_amount: number;
};

export type Company = {
  _id: string;
  name: string;
  description: string;
  number_of_employees: number;
  total_money_raised: string;
  founded_year: number;
  category_code: string;
  twitter_username: string;
  updated_at: string;
  created_at: string;
  email_address: string;
  overview: string;
  offices: Office[];
  external_links: External[];
  ipo?: IPO;
};
