import './App.css';

import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import ColorModeSwitcher from './components/color-mode-switcher';
import Tabs from './components/tabs';

const App = () => {
  return (
    <Box maxW="1000px" mx="auto" p="16px">
      <Flex textAlign="center" w="auto" pos="relative" mb="16px">
        <Text fontSize={{ base: "80px", lg: "40px" }} w="100%">
          F1 Predictor
        </Text>

        <VStack
          justifyContent="center"
          h="100%"
          pos="absolute"
          top={0}
          right={0}
        >
          <ColorModeSwitcher />
        </VStack>
      </Flex>

      <Tabs />
    </Box>
  );
};

export default App;
