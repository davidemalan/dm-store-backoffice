export interface Store {
  id: string;
  data: StoreData;
}

export interface StoreData {
  name: string;
  category: string;
  employees: string[];
}

export interface ProductList {
  list: Product[];
  length: number;
}

export interface Product {
  id: string;
  data: ProductData;
}

export interface ProductData {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}

export interface NewProduct {
  productId: string;
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}

export interface StoreCategoryStats {
  numberOfProducts: number;
  category: string;
}

export interface Pagination {
  data?: Product[];
  isLoading: boolean;
  hasMore: boolean;
  error?: string;
  loadProducts: () => void;
  reloadAll: () => void;
}
