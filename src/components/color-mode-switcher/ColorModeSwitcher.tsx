import * as React from 'react';

import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

const ColorModeSwitcher: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const switchIcon = useColorModeValue("🌚", "🌞");

  return (
    <Button
      fontSize={{ base: "6xl", lg: "4xl" }}
      variant="ghost"
      onClick={toggleColorMode}
      aria-label=""
    >
      {switchIcon}
    </Button>
  );
};

export default ColorModeSwitcher;
