import { FC } from "react";

import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { Driver, Result } from "../../types";

type RaceResultFieldProps = {
  text: "First" | "Last" | "Fastest Lap" | "Pole";
  emoji: "🏆" | "👎" | "⚡" | "🏅";
  value?: Driver;
};
const RaceResultField: FC<RaceResultFieldProps> = ({ text, emoji, value }) => {
  const fontSize = { base: "36px", lg: "24px" };
  const Emoji = () => <Text fontSize={fontSize}>{emoji}</Text>;

  return (
    <Flex justifyContent="space-between" p="8px" alignItems="center">
      <Emoji />

      <Box textAlign="center">
        <Text fontSize={{ base: "24px", lg: "14px" }}>{text}</Text>

        <Text fontSize={fontSize}>{value ?? "-"}</Text>
      </Box>

      <Emoji />
    </Flex>
  );
};

type RaceResultsProps = {
  result: Result;
};
const RaceResults: FC<RaceResultsProps> = ({ result }) => {
  return (
    <VStack>
      <SimpleGrid templateColumns="1fr 1fr" w="100%" columnGap="128px">
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
