import { FC, useContext } from "react";

import {
  Box,
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { StoreContext } from "../../context/StoreContext";
import Top3 from "./Top3";
import { getOrdinal, splitRaces } from "../../utils";

import { FavouritePlayer } from "../favourite-player";

const LeaderboardTab: FC = () => {
  const { races, players } = useContext(StoreContext);

  const { completedRaces } = splitRaces(races);

  const sortedPlayers = [...players];

  sortedPlayers.sort((a, b) => (a.points < b.points ? 1 : -1));

  const top3Players = sortedPlayers.splice(0, 3);

  return (
    <Box>
      <Text
        fontSize={{ base: "24px", lg: "16px" }}
        fontWeight="light"
        textAlign="center"
        mb="16px"
      >
        Races Completed {completedRaces.length} / {races.length}
      </Text>

      <Top3 players={top3Players} />

      <Divider />

      <TableContainer>
        <Table variant="striped" size={{ base: "lg", lg: "md" }}>
          <Thead>
            <Tr>
              <Th w="0px"></Th>

              <Th w="0px">
                <Text fontSize={{ base: "24px", lg: "16px" }}>#</Text>
              </Th>

              <Th>
                <Text fontSize={{ base: "24px", lg: "16px" }}>Name</Text>
              </Th>

              <Th w="0px">
                <Text fontSize={{ base: "24px", lg: "16px" }}>Points</Text>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {sortedPlayers.map((player, i) => {
              return (
                <Tr key={player.id}>
                  <Td pr="0px !important">
                    <FavouritePlayer playerId={player.id} />
                  </Td>

                  <Td>
                    <Text fontSize={{ base: "24px", lg: "16px" }}>
                      {i + 4}
                      {getOrdinal(i + 4)}
                    </Text>
                  </Td>

                  <Td>
                    <Text fontSize={{ base: "24px", lg: "16px" }}>
                      {player.name}
                    </Text>
                  </Td>

                  <Td>
                    <Text
                      textAlign="end"
                      fontSize={{ base: "24px", lg: "16px" }}
                    >
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
