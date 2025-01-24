import { createContext } from 'react';

import { GlobalStateAPI } from './store';

export const GlobalStoreContext = createContext<GlobalStateAPI | undefined>(undefined);
