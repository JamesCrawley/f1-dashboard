import { FC, useContext } from 'react';

import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

import { StoreContext } from '../../context/StoreContext';
import { CompletedRace, Driver, Race, Result } from '../../types';

type RacePredictionProps = {
  race: Race | CompletedRace;
};
const RacePrediction: FC<RacePredictionProps> = ({ race }) => {
  const { players } = useContext(StoreContext);

  const tableFontSize = { base: "32px", lg: "16px" };

  type TableRowProps = {
    resultType: keyof CompletedRace["result"];
    race: Race | CompletedRace;
    label: "First" | "Last" | "Fastest Lap" | "Pole";
  };
  const TableRow: FC<TableRowProps> = ({ resultType, race, label }) => {
    return (
      <Tr>
        <Td>
          <Text fontSize={tableFontSize}>{label}</Text>
        </Td>

        {players.map((player) => {
          const prediction = player.predictions[race.id]?.[resultType];
          const emoji = prediction === race.result?.[resultType] ? "✅" : "❌";

          return (
            <Td key={player.id}>
              <Flex justifyContent="space-between" gap="16px">
                <Text fontSize={tableFontSize}>{prediction ?? "-"}</Text>

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
            <Th w="0px"></Th>

            {players.map((player) => {
              const racePredictions = Object.entries(
                player.predictions[race.id] as Result
              );

              let pointsGained = 0;

              racePredictions.forEach(([resultType, driver]) => {
                if (race.result?.[resultType as keyof Result] === driver) {
                  pointsGained += 5;
                }
              });

              if (pointsGained === 20) pointsGained += 5;

              return (
                <Th key={player.id}>
                  <Text fontSize={tableFontSize}>
                    {player.name}

                    {pointsGained > 0 && (
                      <Text as="span" color="green.500">
                        {` +${pointsGained}`}
                        {pointsGained === 25 ? "🌟" : ""}
                      </Text>
                    )}
                  </Text>
                </Th>
              );
            })}
          </Tr>
        </Thead>

        <Tbody>
          <TableRow resultType="first" label="First" race={race} />

          <TableRow resultType="last" label="Last" race={race} />

          <TableRow resultType="fastestLap" label="Fastest Lap" race={race} />

          <TableRow resultType="pole" label="Pole" race={race} />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RacePrediction;
