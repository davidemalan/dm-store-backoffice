import { FC, ReactElement, useRef } from 'react';

import GlobalAppContainer from './components/globalAppContainer/GlobalAppContainer';
import { GlobalStoreContext } from './store/context';
import { useGlobalStoreInstance } from './store/hooks';
import { GlobalStyles } from './styles/global';
import { baseTheme } from './styles/themes/base';
import { GlobalState, ProductsView } from './types/store';

const App: FC = (): ReactElement => {
  const initialAppRef = useRef<GlobalState>();

  // Initialize the app state only once
  if (!initialAppRef.current) {
    initialAppRef.current = { theme: baseTheme, productsView: ProductsView.LIST_VIEW };
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
