import { FC } from "react";

import {
  Flex,
  HStack,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import { Race, Result } from "../../types";
import { useSettingsStore } from "../../store/useSettingsStore";
import { FavouritePlayer } from "../favourite-player";
import { players } from "../../data";

type RacePredictionProps = {
  race: Race;
};
const RacePrediction: FC<RacePredictionProps> = ({ race }) => {
  const { isCompact, favouritePlayers, toggleIsCompact } = useSettingsStore(
    ({ isCompact, favouritePlayers, toggleIsCompact }) => ({
      isCompact,
      favouritePlayers,
      toggleIsCompact,
    })
  );

  const sortedPlayers = [...players].sort((a, b) => {
    return favouritePlayers.includes(a.id) ? -1 : 1;
  });

  const tableFontSize = { base: "32px", lg: "16px" };
  const tdPx = isCompact ? "8px !important" : "initial";
  const textColor = useColorModeValue("black", "white");

  type TableRowProps = {
    resultType: keyof Result;
    race: Race;
    label: "First" | "Last" | "Fastest Lap" | "Pole";
  };
  const TableRow: FC<TableRowProps> = ({ resultType, race, label }) => {
    return (
      <Tr>
        <Td>
          <Text fontSize={tableFontSize}>{label}</Text>
        </Td>

        {sortedPlayers.map((player) => {
          const prediction = player.predictions[race.id]?.[resultType];
          const emoji = prediction === race.result?.[resultType] ? "✅" : "❌";

          return (
            <Td key={player.id} px={tdPx}>
              <Flex
                justifyContent={!isCompact ? "space-between" : "space-around"}
                gap="16px"
              >
                {!isCompact && (
                  <Text fontSize={tableFontSize}>
                    {prediction ?? "No prediction"}
                  </Text>
                )}

                {!!race.result?.first && (
                  <Text fontSize={tableFontSize}>{emoji}</Text>
                )}
              </Flex>
            </Td>
          );
        })}
      </Tr>
    );
  };

  return (
    <TableContainer>
      <Table
        scrollBehavior="smooth"
        variant="striped"
        size={{ base: "lg", lg: "md" }}
      >
        <Thead>
          <Tr>
            <Th w="0px">
              <Flex gap="8px">
                <Text fontSize={tableFontSize}>Compact</Text>

                <Switch
                  size="md"
                  isChecked={isCompact}
                  onChange={toggleIsCompact}
                />
              </Flex>
            </Th>

            {sortedPlayers.map((player) => {
              return (
                <Th key={player.id} px={tdPx}>
                  <HStack>
                    <Text fontSize={tableFontSize}>{player.name}</Text>

                    <FavouritePlayer size="sm" playerId={player.id} />
                  </HStack>
                </Th>
              );
            })}
          </Tr>
        </Thead>

        <Tbody>
          <TableRow resultType="pole" label="Pole" race={race} />

          <TableRow resultType="first" label="First" race={race} />

          <TableRow resultType="last" label="Last" race={race} />

          <TableRow resultType="fastestLap" label="Fastest Lap" race={race} />

          <Tr>
            <Td>
              <Text fontSize={tableFontSize}>Points Gained</Text>
            </Td>

            {sortedPlayers.map((player) => {
              const predictions = Object.entries(
                (player.predictions[race.id] as Result) ?? {}
              );

              let pointsGained = 0;

              predictions.forEach(([resultType, driver]) => {
                if (race.result?.[resultType as keyof Result] === driver) {
                  pointsGained += 5;
                }
              });

              if (pointsGained === 20) pointsGained += 5;

              return (
                <Td key={player.id} px={tdPx}>
                  <Text
                    fontSize={tableFontSize}
                    textAlign="center"
                    color={pointsGained > 0 ? "green.500" : textColor}
                  >
                    {pointsGained > 0
                      ? ` +${pointsGained} ${pointsGained === 25 ? "🌟" : ""}`
                      : 0}
                  </Text>
                </Td>
              );
            })}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RacePrediction;
