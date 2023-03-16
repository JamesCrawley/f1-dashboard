import { Tab, TabList, TabPanel, TabPanels, Tabs as ChakraTabs } from '@chakra-ui/react';

import LeaderboardTab from './LeaderboardTab';
import RacesTab from './RacesTab';

const Tabs = () => {
  return (
    <ChakraTabs>
      <TabList>
        <Tab>Leaderboard</Tab>
        <Tab>Races</Tab>
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
