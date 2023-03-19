import { FC } from 'react';

import { Stack, Text } from '@chakra-ui/react';

import { getOrdinal } from '../../scripts/utils';

type PodiumProps = { position: number; bgColor: string };
const Podium: FC<PodiumProps> = ({ position, bgColor }) => {
  return (
    <Stack
      justifyContent="space-around"
      bgColor={bgColor}
      w="100%"
      h={`${160 - position * 20}px`}
      _hover={{ filter: "contrast(150%)" }}
      borderTopLeftRadius="8px"
      borderTopRightRadius="8px"
    >
      <Text
        fontWeight="bold"
        color="white"
        fontSize={{ base: "42px", lg: "28px" }}
      >
        {position}
        {getOrdinal(position)}
      </Text>
    </Stack>
  );
};

export default Podium;
