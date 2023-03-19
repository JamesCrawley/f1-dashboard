import { FC, useContext } from 'react';

import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading,
  SimpleGrid, Stack, Text, VStack
} from '@chakra-ui/react';

import { StoreContext } from '../../context/StoreContext';
import { splitRaces } from '../../scripts/utils';
import { CompletedRace, Race } from '../../types';

type RaceResultsProps = {
  race: CompletedRace | Race;
};
const RaceResults: FC<RaceResultsProps> = ({ race }) => {
  type RaceResultFieldProps = { text: string; emoji: string; value?: string };
  const RaceResultField: FC<RaceResultFieldProps> = ({
    text,
    emoji,
    value,
  }) => {
    return (
      <Box p="8px">
        {text && (
          <Flex justifyContent="center">
            <Text fontSize={{ base: "36px", lg: "14px" }}>{text}</Text>

            <Text fontSize={{ base: "42px", lg: "18px" }} ml="8px">
              {emoji}
            </Text>
          </Flex>
        )}

        <em>
          <Text fontSize={{ base: "48px", lg: "24px" }} textAlign="center">
            {value ?? "-"}
          </Text>
        </em>
      </Box>
    );
  };

  return (
    <VStack p="8px" borderRadius="8px">
      <SimpleGrid templateColumns="1fr 1fr" gap="16px" w="100%">
        <RaceResultField text="First" emoji="🏆" value={race.result?.first} />

        <RaceResultField text="Last" emoji="👎" value={race.result?.last} />

        <RaceResultField
          text="Fastest Lap"
          emoji="⚡"
          value={race.result?.fastestLap}
        />

        <RaceResultField text="Pole" emoji="🏅" value={race.result?.pole} />
      </SimpleGrid>
    </VStack>
  );
};

type RaceAccordionProps = {
  races: Race[] | CompletedRace[];
  defaultIndex?: number;
};
const RaceAccordion: FC<RaceAccordionProps> = ({ races, defaultIndex }) => {
  type AccordionHeaderProps = Pick<Race, "name">;
  const AccordionHeader: FC<AccordionHeaderProps> = ({ name }) => {
    return (
      <AccordionButton
        py={{ base: "16px", lg: "8px" }}
        _expanded={{ fontWeight: "bold" }}
      >
        <Text flex="1" fontSize={{ base: "36px", lg: "24px" }} textAlign="left">
          {name}
        </Text>

        <AccordionIcon />
      </AccordionButton>
    );
  };

  return (
    <Accordion allowToggle allowMultiple defaultIndex={defaultIndex}>
      {races.map((race) => {
        return (
          <AccordionItem key={race.id}>
            <AccordionHeader name={`${race.country} - ${race.trackName}`} />

            <AccordionPanel textAlign="left" pb="8px">
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

  const currentRace = upcomingRaces[0].result?.pole
    ? upcomingRaces.shift()
    : null;

  // TODO: fix this
  const Title: FC<{ children: any }> = ({ children }) => {
    return (
      <Text
        fontSize={{ base: "48px", lg: "32px" }}
        my={{ base: "40px", lg: "32px" }}
      >
        {children}
      </Text>
    );
  };

  return (
    <Stack>
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
          <Title>Upcoming Races ⏭️</Title>

          <RaceAccordion races={upcomingRaces} />
        </Box>
      )}
    </Stack>
  );
};

export default RacesTab;
