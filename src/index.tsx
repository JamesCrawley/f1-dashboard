import '@fontsource/mulish';

import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import { StoreContext } from './context/StoreContext';
import { players, races } from './data';
import { getPlayersWithPoints } from './scripts/utils';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const { players: p } = getPlayersWithPoints(players, races);

root.render(
  <ChakraProvider theme={theme}>
    <StoreContext.Provider value={{ players: p, races }}>
      <BrowserRouter>
        <ColorModeScript />
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </ChakraProvider>
);
