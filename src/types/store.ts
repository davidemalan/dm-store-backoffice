import { Product, StoreData } from './api';
import { Theme } from './theme';

export interface GlobalState {
  theme: Theme;
  store?: StoreData;
  productList?: Product[];
  productsView?: ProductsView;
}

export enum ProductsView {
  GRID_VIEW = 'grid-view',
  LIST_VIEW = 'list-view',
}
