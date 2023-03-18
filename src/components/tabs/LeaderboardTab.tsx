import { FC, useContext } from 'react';

import {
  Box, Divider, Flex, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr
} from '@chakra-ui/react';

import { StoreContext } from '../../context/StoreContext';
import { getOrdinal } from '../../scripts/utils';
import { Player } from '../../types';
import PlayerCard from '../player-card';

type Top3Props = {
  players: Player[];
};
const Top3: FC<Top3Props> = ({ players }) => {
  const colors = {
    gold: "#b4b4b4",
    silver: "#c9b037",
    bronze: "#ad8a56",
  };

  type PodiumProps = { position: number; bgColor: string };
  const Podium: FC<PodiumProps> = ({ position, bgColor }) => {
    return (
      <Stack
        id={`podium-${position}`}
        justifyContent="space-around"
        bgColor={bgColor}
        w="100%"
        h={`${160 - position * 20}px`}
        _hover={{ filter: "contrast(150%)" }}
        borderTopLeftRadius="8px"
        borderTopRightRadius="8px"
      >
        <Text fontWeight="bold" color="white" fontSize="28px">
          {position}
          {getOrdinal(position)}
        </Text>
      </Stack>
    );
  };

  return (
    <Box borderTopLeftRadius="32px" borderTopRightRadius="32px">
      <Flex columnGap="16px" w="min-content" mx="auto">
        <Stack alignItems="center">
          <PlayerCard player={players[1]} mt="20px" />
          <Podium position={2} bgColor={colors.gold} />
        </Stack>

        <Stack alignItems="center">
          <PlayerCard player={players[0]} />
          <Podium position={1} bgColor={colors.silver} />
        </Stack>

        <Stack alignItems="center">
          <PlayerCard player={players[2]} mt="40px" />
          <Podium position={3} bgColor={colors.bronze} />
        </Stack>
      </Flex>
    </Box>
  );
};

const LeaderboardTab = () => {
  const { races, players } = useContext(StoreContext);

  const racesCompleted = races
    .map(({ result }): number => (result?.first ? 1 : 0))
    .reduce((a, b) => a + b);

  const sortedPlayers = [...players];

  sortedPlayers.sort((a, b) => (a.points < b.points ? 1 : -1));

  const top3Players = sortedPlayers.splice(0, 3);

  return (
    <Box>
      <Text fontSize="16px" fontWeight="light" textAlign="left" mb="16px">
        Races Completed {racesCompleted} / {races.length}
      </Text>

      <Top3 players={top3Players} />

      <Divider />
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th w="0px">
                <Text>#</Text>
              </Th>
              <Th>
                <Text>Name</Text>
              </Th>
              <Th w="0px">
                <Text>Points</Text>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {sortedPlayers.map((player, i) => {
              return (
                <Tr key={player.id}>
                  <Td>
                    <Text>
                      {i + 4}
                      {getOrdinal(i + 4)}
                    </Text>
                  </Td>
                  <Td>
                    <Text>{player.name}</Text>
                  </Td>
                  <Td>
                    <Text textAlign="end" fontWeight="bold">
                      {player.points}
                    </Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeaderboardTab;
