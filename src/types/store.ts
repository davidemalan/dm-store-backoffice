export interface Store {
  id: string;
  data: {
    name: string;
    category: string;
    employees: string[];
  };
}

export interface ProductList {
  list: Product[];
  length: number;
}

export interface Product {
  id: string;
  data: {
    title: string;
    category: string;
    price: 0;
    employee: string;
    description: string;
    reviews: [string];
  };
}
