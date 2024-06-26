import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Box, Tab, TabList, Tabs as ChakraTabs, Text } from "@chakra-ui/react";

import LeaderboardTab from "./LeaderboardTab";
import RacesTab from "./RacesTab";

const tabs = [
  {
    text: "Leaderboard",
    path: "/leaderboard",
    route: <Route path="/leaderboard" element={<LeaderboardTab />} />,
  },
  {
    text: "Races",
    path: "/races",
    route: <Route path="/races" element={<RacesTab />} />,
  },
];
const Tabs = () => {
  const navigate = useNavigate();

  const [selectedTab, changeSelectedTab] = useState<number>(
    tabs.findIndex(({ path }) => path === window.location.pathname)
  );

  const onTabChange = useCallback(
    (index: number) => {
      navigate(tabs[index].path);

      changeSelectedTab(index);
    },
    [navigate]
  );

  useEffect(() => {
    if (window.location.pathname === "/") onTabChange(0);
  }, [onTabChange]);

  return (
    <Box>
      <ChakraTabs
        variant="enclosed-colored"
        index={selectedTab}
        onChange={onTabChange}
        isFitted
        isLazy
      >
        <TabList>
          {tabs.map(({ text }, key) => (
            <Tab key={key}>
              <Text fontSize={{ base: "40px", lg: "16px" }}>{text}</Text>
            </Tab>
          ))}
        </TabList>
      </ChakraTabs>

      <Box pt="16px">
        <Routes>
          {tabs.map(({ route }, key) => (
            <React.Fragment key={key}>{route}</React.Fragment>
          ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default Tabs;
