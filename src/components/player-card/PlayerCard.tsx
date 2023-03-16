import { FC } from 'react';

import { Box, LightMode, Stack, StackProps, Text } from '@chakra-ui/react';

import { Player } from '../../types';

type PlayerCardProps = { player: Player } & StackProps;
const PlayerCard: FC<PlayerCardProps> = ({ player, ...props }) => {
  return (
    <Stack
      justifyContent="center"
      w="160px"
      h="160px"
      bgColor="blackAlpha.200"
      borderRadius="16px"
      p="16px"
      {...props}
    >
      <Box>
        <Text>{player.name}</Text>

        <Text fontSize="60px" lineHeight="60px" fontWeight="bold">
          {player.points}
        </Text>
        <Text fontSize="12px">Points</Text>
      </Box>
    </Stack>
  );
};

export default PlayerCard;
