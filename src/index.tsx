import './fonts/Mulish-Regular.ttf';
import './fonts/Mulish-Bold.ttf';
import './fonts/Mulish-Italic.ttf';
import './fonts/Mulish-BoldItalic.ttf';

import * as ReactDOM from 'react-dom/client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import { StoreContext } from './context/StoreContext';
import { players, races } from './data';
import theme from './theme';
import { getPlayersWithPoints } from './types/scripts/utils';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const { players: p } = getPlayersWithPoints(players, races);

root.render(
  <ChakraProvider theme={theme}>
    <StoreContext.Provider value={{ players: p, races }}>
      <ColorModeScript />
      <App />
    </StoreContext.Provider>
  </ChakraProvider>
);
