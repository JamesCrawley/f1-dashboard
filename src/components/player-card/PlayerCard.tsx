import { FC } from 'react';

import { Box, LightMode, Stack, StackProps, Text } from '@chakra-ui/react';

import { Player } from '../../types';

type PlayerCardProps = { player: Player } & StackProps;
const PlayerCard: FC<PlayerCardProps> = ({ player, ...props }) => {
  return (
    <Stack
      justifyContent="center"
      w="240px"
      h="240px"
      borderRadius="16px"
      p="16px"
      gap="8px"
      {...props}
    >
      <Text fontSize="20px">{player.name}</Text>

      <Text fontSize="80px" lineHeight="60px" fontWeight="bold">
        {player.points}
      </Text>

      <Text fontSize="16px">Points</Text>
    </Stack>
  );
};

export default PlayerCard;
