import { devtools } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

import { GlobalState } from '../types/store';

export type GlobalStore = GlobalState & ReturnType<typeof createActions>;
export type GlobalStateAPI = ReturnType<typeof createGlobalStore>;

// store actions
const createActions = (
  set: (fn: (state: GlobalState) => GlobalState, replace: false | undefined, name: string) => void
) => ({
  setTheme: (theme: GlobalState['theme']) =>
    set(
      (state) => {
        return {
          ...state,
          theme,
        };
      },
      undefined,
      'setStore'
    ),

  setStore: (store: GlobalState['store']) =>
    set(
      (state) => {
        return {
          ...state,
          store,
        };
      },
      undefined,
      'setStore'
    ),

  setProducts: (productList: GlobalState['productList']) =>
    set(
      (state) => {
        return {
          ...state,
          productList,
        };
      },
      undefined,
      'setStore'
    ),
});

// base store creation fn, with devtools for redux devtools debugging
export const createGlobalStore = (initialState: GlobalState) =>
  createStore<GlobalState & ReturnType<typeof createActions>>()(
    devtools((set) => ({ ...initialState, ...createActions(set) }), {
      name: 'Global store',
    })
  );
