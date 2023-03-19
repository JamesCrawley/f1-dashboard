import { FC } from 'react';

import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';

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
            <Text fontSize={{ base: "32px", lg: "14px" }}>{text}</Text>

            <Text fontSize={{ base: "36px", lg: "18px" }} ml="8px">
              {emoji}
            </Text>
          </Flex>
        )}

        <em>
          <Text fontSize={{ base: "40px", lg: "24px" }} textAlign="center">
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

export default RaceResults;
