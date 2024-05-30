import { FC } from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Race } from "../../types";
import RaceResults from "../race-results";
import RacePrediction from "../race-prediction";
import { useSettingsStore } from "../../store/useSettingsStore";
import { players } from "../../data";

const fontSize = { base: "36px", lg: "24px" };
const textProps = {
  fontSize,
  mb: "16px",
};

type AccordionHeaderProps = {
  name: Race["name"];
  onClick: () => void;
};
const AccordionHeader: FC<AccordionHeaderProps> = ({ name, onClick }) => {
  return (
    <AccordionButton
      py={{ base: "16px", lg: "8px" }}
      _expanded={{ fontWeight: "bold" }}
      onClick={onClick}
    >
      <Text flex="1" fontSize={fontSize} textAlign="left">
        {name}
      </Text>

      <AccordionIcon />
    </AccordionButton>
  );
};

type RaceAccordionProps = {
  races: Race[];
};
const RaceAccordion: FC<RaceAccordionProps> = ({ races }) => {
  const { expandedRaces, toggleExpandedRace } = useSettingsStore(
    ({ expandedRaces, toggleExpandedRace }) => ({
      expandedRaces,
      toggleExpandedRace,
    })
  );

  return (
    <Accordion allowMultiple index={expandedRaces}>
      {races.map((race, index) => {
        return (
          <AccordionItem key={race.id}>
            <AccordionHeader
              name={`${race.country} - ${race.trackName}`}
              onClick={() => toggleExpandedRace(index)}
            />

            <AccordionPanel textAlign="left" py="16px">
              <Stack gap="32px" textAlign="center">
                {race.status === "cancelled" ? (
                  <Text {...textProps} color="red">
                    ❗ Race Cancelled ❗
                  </Text>
                ) : (
                  <>
                    {race.result && (
                      <Box>
                        <Text {...textProps}>Results</Text>

                        <Divider />

                        <RaceResults result={race.result} />
                      </Box>
                    )}

                    {players.some((player) => !!player.predictions[race.id]) ? (
                      <Box>
                        <Text {...textProps}>Predictions</Text>

                        <Divider />

                        <RacePrediction race={race} />
                      </Box>
                    ) : (
                      <Text {...textProps}>No predictions yet</Text>
                    )}
                  </>
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default RaceAccordion;
