import React, { useRef } from 'react';

import GlobalAppContainer from './components/global-app-container/GlobalAppContainer';
import { GlobalStoreContext } from './store/context';
import { useGlobalStoreInstance } from './store/hooks';
import { GlobalStyles } from './styles/global';
import { GlobalState } from './types/store';

const App: React.FC = () => {
  const initialAppRef = useRef<GlobalState>();

  // Initialize the app state only once
  if (!initialAppRef.current) {
    initialAppRef.current = {};
  }

  // instance for context provider
  const globalStore = useGlobalStoreInstance(initialAppRef.current);

  return (
    <GlobalStoreContext.Provider value={globalStore}>
      <GlobalStyles />
      <GlobalAppContainer />
    </GlobalStoreContext.Provider>
  );
};

export default App;
