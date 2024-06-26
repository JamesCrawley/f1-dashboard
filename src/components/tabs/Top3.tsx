import { FC } from "react";

import { Box, Flex, Stack } from "@chakra-ui/react";

import { Player } from "../../types";
import PlayerCard from "../player-card";
import Podium from "../podium";
import { colors } from "../../constants";

type Top3Props = {
  players: Player[];
};
const Top3: FC<Top3Props> = ({ players }) => {
  return (
    <Box borderTopLeftRadius="32px" borderTopRightRadius="32px">
      <Flex columnGap="16px" w="min-content" mx="auto">
        <Stack alignItems="center" justifyContent="flex-end">
          <PlayerCard player={players[1]} mt="20px" color={colors.silver} />

          <Podium position={2} bgColor={colors.silver} />
        </Stack>

        <Stack alignItems="center" justifyContent="flex-end">
          <PlayerCard player={players[0]} color={colors.gold} />

          <Podium position={1} bgColor={colors.gold} />
        </Stack>

        <Stack alignItems="center" justifyContent="flex-end">
          <PlayerCard player={players[2]} mt="40px" color={colors.bronze} />

          <Podium position={3} bgColor={colors.bronze} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Top3;
