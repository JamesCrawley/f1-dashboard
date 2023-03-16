import { FC, useContext } from 'react';

import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Flex,
  Stack, Text
} from '@chakra-ui/react';

import { StoreContext } from '../../context/StoreContext';

const RacesTab = () => {
  const { races } = useContext(StoreContext);

  type AccordionFieldProps = { text: string; value: string };
  const AccordionField: FC<AccordionFieldProps> = ({ text, value }) => {
    return (
      <Box p="8px">
        <Text fontSize="12px">{text}</Text>
        <Text fontSize="20px">{value}</Text>
      </Box>
    );
  };

  return (
    <Box>
      {races.map((race) => {
        return (
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton py="8px">
                <Text flex="1" textAlign="left">
                  {race.name}
                </Text>

                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel
                textAlign="left"
                pb="8px"
                bgColor="blackAlpha.200"
              >
                <Stack>
                  <AccordionField text="Country" value={race.country} />

                  <Divider />

                  <AccordionField text="Name" value={race.name} />

                  {race.result && (
                    <>
                      <Divider />
                      <Flex justifyContent="space-between" wrap="wrap">
                        <AccordionField
                          text="First"
                          value={race.result.first}
                        />

                        <Divider orientation="vertical" />

                        <AccordionField text="Last" value={race.result.last} />

                        <Divider orientation="vertical" />

                        <AccordionField
                          text="Fastest Lap"
                          value={race.result.fastestLap}
                        />

                        <Divider orientation="vertical" />

                        <AccordionField text="Pole" value={race.result.pole} />
                      </Flex>
                    </>
                  )}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default RacesTab;
