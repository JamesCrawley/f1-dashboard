import { FC, useContext } from 'react';

import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading,
  LightMode, Stack, Text, VStack
} from '@chakra-ui/react';

import { StoreContext } from '../../context/StoreContext';
import { splitRaces } from '../../scripts/utils';
import { CompletedRace, Race } from '../../types';

type RaceResultsProps = {
  header?: string;
  race: CompletedRace | Race;
};
const RaceResults: FC<RaceResultsProps> = ({ header, race }) => {
  const p = { width: "fit-content", bgColor: "white", px: "8px" };

  type RaceResultFieldProps = { text?: string; value?: string };
  const RaceResultField: FC<RaceResultFieldProps> = ({ text, value }) => {
    return (
      <Box p="8px" textAlign="center">
        {text && (
          <Text {...p} fontSize="14px">
            <em>{text}</em>
          </Text>
        )}

        <Text {...p} fontSize="24px">
          {value ?? "-"}
        </Text>
      </Box>
    );
  };

  return (
    <VStack p="8px" borderRadius="8px" color="black">
      {header && (
        <Heading {...p} fontSize="24px">
          {header}
        </Heading>
      )}

      <RaceResultField value={race.name} />

      {race.result && (
        <Flex w="100%" justifyContent="space-around" wrap="wrap">
          <RaceResultField text="First" value={race.result.first} />

          <RaceResultField text="Last" value={race.result.last} />

          <RaceResultField text="Fastest Lap" value={race.result.fastestLap} />

          <RaceResultField text="Pole" value={race.result.pole} />
        </Flex>
      )}
    </VStack>
  );
};

type RaceAccordionProps = {
  races: Race[] | CompletedRace[];
};
const RaceAccordion: FC<RaceAccordionProps> = ({ races }) => {
  type AccordionHeaderProps = Pick<Race, "name">;
  const AccordionHeader: FC<AccordionHeaderProps> = ({ name }) => {
    return (
      <AccordionButton py="8px">
        <Text flex="1" textAlign="left">
          {name}
        </Text>

        <AccordionIcon />
      </AccordionButton>
    );
  };

  return (
    <Accordion allowToggle>
      {races.map((race) => {
        return (
          <AccordionItem>
            <AccordionHeader name={race.name} />

            <AccordionPanel textAlign="left" pb="8px" bgColor="blackAlpha.200">
              <RaceResults race={race} />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

const RacesTab = () => {
  const { races } = useContext(StoreContext);

  const { completedRaces, upcomingRaces } = splitRaces(races);

  const previousRace = completedRaces.pop();
  const nextRace = upcomingRaces.shift();

  return (
    <Stack gap="16px">
      {completedRaces.length > 0 && (
        <Box>
          <Heading fontSize="24px" mb="8px">
            Completed Races
          </Heading>
          <RaceAccordion races={completedRaces} />
        </Box>
      )}

      {previousRace && (
        <Box
          py="16px"
          borderRadius="8px"
          bg="repeating-conic-gradient(lightgrey 0% 25%, transparent 0% 50%) 50% / 20px 20px"
          bgPosition="top"
        >
          <RaceResults header="Previous Race" race={previousRace} />
        </Box>
      )}

      {nextRace && (
        <Box bgColor="blackAlpha.300" py="16px" borderRadius="8px">
          <RaceResults header="Next Race" race={nextRace} />
        </Box>
      )}

      {upcomingRaces.length > 0 && (
        <Box py="16px" borderRadius="8px">
          <Heading fontSize="24px" mb="8px">
            Upcoming Races
          </Heading>
          <RaceAccordion races={upcomingRaces} />
        </Box>
      )}
    </Stack>
  );
};

export default RacesTab;
