import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const fonts = {
  heading: "Mulish",
  body: "Mulish",
};

const theme = extendTheme({ config, fonts });

export default theme;
