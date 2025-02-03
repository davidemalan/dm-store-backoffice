import { Product, Store } from './api';
import { Theme } from './theme';

export interface GlobalState {
  theme: Theme;
  store?: Store;
  productList?: Product[];
  productsView?: ProductsView;
}

export enum ProductsView {
  GRID_VIEW = 'grid-view',
  LIST_VIEW = 'list-view',
}
