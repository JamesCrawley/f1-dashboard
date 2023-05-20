import { FC, useContext } from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { StoreContext } from "../../context/StoreContext";
import { Race } from "../../types";
import RaceResults from "../race-results";
import RacePrediction from "./RacePrediction";

const fontSize = { base: "36px", lg: "24px" };
const textProps = {
  fontSize,
  mb: "16px",
};

type AccordionHeaderProps = Pick<Race, "name">;
const AccordionHeader: FC<AccordionHeaderProps> = ({ name }) => {
  return (
    <AccordionButton
      py={{ base: "16px", lg: "8px" }}
      _expanded={{ fontWeight: "bold" }}
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
  defaultIndex?: number;
};
const RaceAccordion: FC<RaceAccordionProps> = ({ races, defaultIndex }) => {
  const { players } = useContext(StoreContext);

  return (
    <Accordion allowToggle defaultIndex={defaultIndex}>
      {races.map((race) => {
        return (
          <AccordionItem key={race.id}>
            <AccordionHeader name={`${race.country} - ${race.trackName}`} />

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
