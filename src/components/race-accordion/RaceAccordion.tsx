import { FC } from 'react';

import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text
} from '@chakra-ui/react';

import { CompletedRace, Race } from '../../types';
import RaceResults from '../race-results';

type RaceAccordionProps = {
  races: Race[] | CompletedRace[];
  defaultIndex?: number;
};
const RaceAccordion: FC<RaceAccordionProps> = ({ races, defaultIndex }) => {
  type AccordionHeaderProps = Pick<Race, "name">;
  const AccordionHeader: FC<AccordionHeaderProps> = ({ name }) => {
    return (
      <AccordionButton
        py={{ base: "16px", lg: "8px" }}
        _expanded={{ fontWeight: "bold" }}
      >
        <Text flex="1" fontSize={{ base: "36px", lg: "16px" }} textAlign="left">
          {name}
        </Text>

        <AccordionIcon />
      </AccordionButton>
    );
  };

  return (
    <Accordion allowToggle allowMultiple defaultIndex={defaultIndex}>
      {races.map((race) => {
        return (
          <AccordionItem key={race.id}>
            <AccordionHeader name={`${race.country} - ${race.trackName}`} />

            <AccordionPanel textAlign="left" pb="8px">
              <RaceResults race={race} />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default RaceAccordion;
