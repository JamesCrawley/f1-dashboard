import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import ColorModeSwitcher from './components/color-mode-switcher';
import Tabs from './components/tabs';

const App = () => (
  <Box textAlign="center" minH="100vh" fontSize="xl">
    <SimpleGrid maxW="1000px" mx="auto" gridTemplateColumns="1fr auto" p="16px">
      <Box textAlign="center" w="auto">
        <Flex justifyContent="space-between" alignItems="center" mt="16px">
          <Heading fontSize="40px">F1 Predictor</Heading>

          <ColorModeSwitcher />
        </Flex>

        <Tabs />
      </Box>
    </SimpleGrid>
  </Box>
);

export default App;
