import { FC, useContext } from 'react';

import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

import { StoreContext } from '../../context/StoreContext';
import { CompletedRace, Race } from '../../types';

type RacePredictionProps = {
  race: Race | CompletedRace;
};
const RacePrediction: FC<RacePredictionProps> = ({ race }) => {
  const { players } = useContext(StoreContext);

  type TableRowProps = {
    resultType: keyof CompletedRace["result"];
    race: Race | CompletedRace;
    label: "First" | "Last" | "Fastest Lap" | "Pole";
  };
  const TableRow: FC<TableRowProps> = ({ resultType, race, label }) => {
    return (
      <Tr>
        <Td>
          <Text fontSize={{ base: "24px", lg: "16px" }}>{label}</Text>
        </Td>

        {players.map((player) => {
          const prediction = player.predictions[race.id]?.[resultType];
          const emoji = prediction === race.result?.[resultType] ? "✅" : "❌";

          return (
            <Td key={player.id}>
              <Flex justifyContent="space-between" gap="16px">
                <Text fontSize={{ base: "24px", lg: "16px" }}>
                  {prediction ?? "-"}
                </Text>

                {!!race.result?.first && (
                  <Text fontSize={{ base: "24px", lg: "16px" }}>{emoji}</Text>
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
      <Table variant="striped" size={{ base: "lg", lg: "md" }}>
        <Thead>
          <Tr>
            <Th w="0px">
              <Text fontSize={{ base: "32px", lg: "16px" }}></Text>
            </Th>

            {players.map((player) => (
              <Th key={player.id}>
                <Text>{player.name}</Text>
              </Th>
            ))}
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
