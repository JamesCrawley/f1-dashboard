import { FC } from 'react';

import { Stack, StackProps, Text } from '@chakra-ui/react';

import { Player } from '../../types';

type PlayerCardProps = { player: Player } & StackProps;
const PlayerCard: FC<PlayerCardProps> = ({ player, ...props }) => {
  return (
    <Stack
      justifyContent="center"
      textAlign="center"
      w="200px"
      borderRadius="16px"
      p="16px"
      gap={{ base: "16px", lg: "8px" }}
      {...props}
    >
      <Text fontSize={{ base: "32px", lg: "20px" }}>{player.name}</Text>

      <Text fontSize="80px" lineHeight="60px">
        {player.points}
      </Text>

      <Text fontSize={{ base: "32px", lg: "16px" }}>Points</Text>
    </Stack>
  );
};

export default PlayerCard;
