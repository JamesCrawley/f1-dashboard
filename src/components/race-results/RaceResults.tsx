import { FC } from 'react';

import { Box, Flex, FlexProps, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';

import { CompletedRace, Driver, Race, Result } from '../../types';

type RaceResultFieldProps = {
  text: "First" | "Last" | "Fastest Lap" | "Pole";
  emoji: "🏆" | "👎" | "⚡" | "🏅";
  value?: Driver;
};
const RaceResultField: FC<RaceResultFieldProps> = ({ text, emoji, value }) => {
  return (
    <Flex
      justifyContent="space-between"
      columnGap="16px"
      p="8px"
      alignItems="center"
    >
      <Text opacity="0.5" fontSize={{ base: "36px", lg: "24px" }}>
        {emoji}
      </Text>

      <Box textAlign="center">
        <Text fontSize={{ base: "24px", lg: "18px" }}>{text}</Text>

        <Text fontSize={{ base: "36px", lg: "24px" }}>{value ?? "-"}</Text>
      </Box>

      <Text opacity="0.5" fontSize={{ base: "36px", lg: "24px" }}>
        {emoji}
      </Text>
    </Flex>
  );
};

type RaceResultsProps = {
  result: Result;
};
const RaceResults: FC<RaceResultsProps> = ({ result }) => {
  return (
    <VStack>
      <SimpleGrid templateColumns="1fr 1fr" w="100%" columnGap="32px">
        <RaceResultField text="First" emoji="🏆" value={result?.first} />

        <RaceResultField text="Last" emoji="👎" value={result?.last} />

        <RaceResultField
          text="Fastest Lap"
          emoji="⚡"
          value={result?.fastestLap}
        />

        <RaceResultField text="Pole" emoji="🏅" value={result.pole} />
      </SimpleGrid>
    </VStack>
  );
};

export default RaceResults;
