import { ProductList, Store } from './api';
import { Theme } from './theme';

export interface GlobalState {
  theme: Theme;
  store?: Store;
  productList?: ProductList;
  productsView?: ProductsView;
}

export enum ProductsView {
  GRID_VIEW = 'grid-view',
  LIST_VIEW = 'list-view',
}
