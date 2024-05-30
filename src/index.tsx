import "@fontsource/mulish";

import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";

import theme from "./theme";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Toaster />

      <ColorModeScript />

      <App />
    </BrowserRouter>
  </ChakraProvider>
);
