import { FC, PropsWithChildren, useContext } from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';

import { StoreContext } from '../../context/StoreContext';
import { splitRaces } from '../../scripts/utils';
import RaceAccordion from '../race-accordion';
import RaceResults from '../race-results';

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text
      fontSize={{ base: "48px", lg: "24px" }}
      my={{ base: "40px", lg: "24px" }}
    >
      {children}
    </Text>
  );
};

const RacesTab = () => {
  const { races } = useContext(StoreContext);

  const { completedRaces, upcomingRaces } = splitRaces(races);

  const currentRace = upcomingRaces[0].result?.pole
    ? upcomingRaces.shift()
    : null;

  return (
    <Stack textAlign="center">
      {currentRace && (
        <Box bgColor="green.200" py="16px" borderRadius="8px">
          <Title>
            🏎️ {`${currentRace.country} - ${currentRace.trackName}`} 🏎️
          </Title>

          <RaceResults race={currentRace} />
        </Box>
      )}

      {completedRaces.length > 0 && (
        <Box>
          <Title>Completed Races 🏁</Title>

          <RaceAccordion
            races={completedRaces}
            defaultIndex={currentRace ? undefined : completedRaces.length - 1}
          />
        </Box>
      )}

      {upcomingRaces.length > 0 && (
        <Box borderRadius="8px">
          <Title>Upcoming Races 🔜</Title>

          <RaceAccordion races={upcomingRaces} />
        </Box>
      )}
    </Stack>
  );
};

export default RacesTab;
