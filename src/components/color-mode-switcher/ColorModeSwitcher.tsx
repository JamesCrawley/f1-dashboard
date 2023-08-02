import * as React from "react";

import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ColorModeSwitcher: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const switchIcon = useColorModeValue("🌚", "🌞");

  return (
    <Button
      fontSize={{ base: "6xl", lg: "4xl" }}
      variant="ghost"
      onClick={toggleColorMode}
    >
      {switchIcon}
    </Button>
  );
};

export default ColorModeSwitcher;
