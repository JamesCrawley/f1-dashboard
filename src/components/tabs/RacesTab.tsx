import { FC, PropsWithChildren, useContext } from "react";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { StoreContext } from "../../context/StoreContext";
import { splitRaces } from "../../utils";
import { Result } from "../../types";
import RaceAccordion from "../race-accordion";
import RaceResults from "../race-results";

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

  const { completedRaces, upcomingRaces, currentRace } = splitRaces(races);

  const bgColor = useColorModeValue("green.200", "green.400");

  return (
    <Stack textAlign="center" gap="32px">
      {currentRace && (
        <Box bgColor={bgColor} pb="16px" borderRadius="8px">
          <Title>
            🏎️ {`${currentRace.country} - ${currentRace.trackName}`} 🏎️
          </Title>

          <RaceResults result={currentRace.result as Result} />
        </Box>
      )}

      {completedRaces.length > 0 && (
        <Box>
          <Title>Completed Races 🏁</Title>

          <RaceAccordion races={completedRaces} />
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
