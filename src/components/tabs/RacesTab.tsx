import { FC, useContext } from 'react';

import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Flex,
  Heading, Stack, Text, VStack
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
      <Box p="8px" textAlign="center">
        {text && (
          <Flex>
            <Text fontSize="14px">
              <em>{text}</em>
            </Text>

            {emoji && (
              <Text fontSize="18px" ml="8px">
                {emoji}
              </Text>
            )}
          </Flex>
        )}

        <Text fontSize="24px" fontWeight="bold">
          {value ?? "-"}
        </Text>
      </Box>
    );
  };

  return (
    <VStack p="8px" borderRadius="8px" color="black">
      {/* <Heading fontSize="24px" mb="16px">
        {race.name}
      </Heading> */}

      <Flex w="100%" justifyContent="space-around" wrap="wrap">
        <RaceResultField text="First" emoji="🏆" value={race.result?.first} />

        <RaceResultField text="Last" emoji="👎" value={race.result?.last} />

        <RaceResultField
          text="Fastest Lap"
          emoji="⚡"
          value={race.result?.fastestLap}
        />

        <RaceResultField text="Pole" emoji="🏅" value={race.result?.pole} />
      </Flex>
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
          <AccordionItem key={race.id}>
            <AccordionHeader name={race.name} />

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

  return (
    <Stack gap="16px">
      {currentRace && (
        <Box bgColor="green.200" py="16px" borderRadius="8px">
          <Heading fontSize="32px" mb="8px">
            🏎️ {currentRace.name} 🏎️
          </Heading>

          <RaceResults race={currentRace} />
        </Box>
      )}

      {completedRaces.length > 0 && (
        <Box>
          <Heading fontSize="24px" mb="8px">
            Completed Races 🏁
          </Heading>

          <RaceAccordion races={completedRaces} />
        </Box>
      )}

      {upcomingRaces.length > 0 && (
        <Box borderRadius="8px">
          <Heading fontSize="24px" mb="8px">
            Upcoming Races ⏭️
          </Heading>

          <RaceAccordion races={upcomingRaces} />
        </Box>
      )}
    </Stack>
  );
};

export default RacesTab;
