import { useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { GlobalState } from '../types/store';

import { GlobalStoreContext } from './context';
import { createGlobalStore, GlobalStateAPI, GlobalStore } from './store';

// to create the first instance
export const useGlobalStoreInstance = (initialState: GlobalState): GlobalStateAPI => {
  const storeRef = useRef<GlobalStateAPI>();

  if (!storeRef.current) {
    storeRef.current = createGlobalStore(initialState);
  }

  return storeRef.current;
};

// to actually use the store
export const useGlobalStore = <U>(selector: (state: GlobalStore) => U) => {
  const storeContext = useContext(GlobalStoreContext);

  if (!storeContext) {
    throw new Error('useGlobalStore must be used within a GlobalStoreContext.Provider');
  }

  return useStore(storeContext, selector);
};
