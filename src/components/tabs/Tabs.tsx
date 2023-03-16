import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tab, TabList, TabPanel, TabPanels, Tabs as ChakraTabs, Text } from '@chakra-ui/react';

import LeaderboardTab from './LeaderboardTab';
import RacesTab from './RacesTab';

const Tabs = () => {
  const navigate = useNavigate();

  const tabMap: { [pathname: string]: number } = {
    "/leaderboard": 0,
    "/races": 1,
  };

  const [selectedTab, changeSelectedTab] = useState<number>(
    tabMap[window.location.pathname] ?? 0
  );

  const onTabChange = (index: number) => {
    const defaultRoute = "/leaderboard"; // fallback

    navigate(
      Object.entries(tabMap).find(([pathname, i]) => i === index)?.[0] ??
        defaultRoute
    );
    changeSelectedTab(index);
  };

  return (
    <ChakraTabs index={selectedTab} onChange={onTabChange}>
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
