import './App.css';

import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import { get, post } from './api';
import ColorModeSwitcher from './components/color-mode-switcher';
import Tabs from './components/tabs';

const App = () => {
  const getData = async () => {
    try {
      const response = await post("/test", { test: true });

      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box textAlign="center" minH="100vh" fontSize="xl">
      <SimpleGrid
        maxW="1000px"
        mx="auto"
        gridTemplateColumns="1fr auto"
        p="16px"
      >
        <Box textAlign="center" w="auto">
          <Flex justifyContent="space-between" alignItems="center" mt="16px">
            <Heading fontSize="40px" mb="16px">
              F1 Predictor
            </Heading>

            <ColorModeSwitcher />
          </Flex>

          <Button onClick={getData}>CLICK ME</Button>

          <Tabs />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default App;
