import { createContext } from 'react';

import { players, races } from '../data';

export const StoreContext = createContext({ players, races });
