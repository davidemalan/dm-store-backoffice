import { ProductList, Store } from './api';
import { Theme } from './theme';

export interface GlobalState {
  theme: Theme;
  store?: Store;
  productList?: ProductList;
}
