import './App.css';

import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import ColorModeSwitcher from './components/color-mode-switcher';
import Tabs from './components/tabs';

const App = () => {
  return (
    <Box textAlign="center" minH="100vh" fontSize="xl">
      <SimpleGrid
        maxW="1000px"
        mx="auto"
        gridTemplateColumns="1fr auto"
        p="16px"
      >
        <Box textAlign="center" w="auto">
          <Flex justifyContent="space-between" alignItems="center" my="16px">
            <Heading fontSize={{ base: "80px", lg: "40px" }} mb="16px">
              F1 Predictor
            </Heading>

            <ColorModeSwitcher />
          </Flex>

          <Tabs />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default App;
