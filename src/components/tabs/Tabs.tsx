import { Tab, TabList, TabPanel, TabPanels, Tabs as ChakraTabs, Text } from '@chakra-ui/react';

import LeaderboardTab from './LeaderboardTab';
import RacesTab from './RacesTab';

const Tabs = () => {
  return (
    <ChakraTabs>
      <TabList>
        <Tab>
          <Text>Leaderboard</Text>
        </Tab>
        <Tab>
          <Text>Races</Text>
        </Tab>
      </TabList>

      <TabPanels maxW="1000px" pt="16px">
        <TabPanel>
          <LeaderboardTab />
        </TabPanel>

        <TabPanel>
          <RacesTab />
        </TabPanel>
      </TabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
