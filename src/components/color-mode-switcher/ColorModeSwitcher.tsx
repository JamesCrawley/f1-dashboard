import * as React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import {
  Box, IconButton, IconButtonProps, useColorMode, useColorModeValue
} from '@chakra-ui/react';

const ColorModeSwitcher: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const switchIcon = useColorModeValue("🌚", "🌞");

  return (
    <IconButton
      fontSize={{ base: "8xl", lg: "4xl" }}
      variant="ghost"
      onClick={toggleColorMode}
      icon={<>{switchIcon}</>}
      aria-label=""
    />
  );
};

export default ColorModeSwitcher;
