import "@fontsource/mulish";

import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import { StoreContext } from "./context/StoreContext";
import { players, races } from "./data";
import { getPlayersWithPoints } from "./utils";
import theme from "./theme";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const playersWithPoints = getPlayersWithPoints(players, races);

root.render(
  <ChakraProvider theme={theme}>
    <StoreContext.Provider value={{ players: playersWithPoints, races }}>
      <BrowserRouter>
        <Toaster />

        <ColorModeScript />

        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </ChakraProvider>
);
