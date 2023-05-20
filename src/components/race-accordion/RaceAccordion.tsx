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

type RaceAccordionProps = {
  races: Race[];
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
                  <Text fontSize="36px" mb="16px" color="red">
                    ❗ Race Cancelled ❗
                  </Text>
                ) : (
                  <>
                    {race.result && (
                      <Box>
                        <Text fontSize="36px" mb="16px">
                          Results
                        </Text>

                        <Divider />

                        <RaceResults result={race.result} />
                      </Box>
                    )}

                    {players.some((player) => !!player.predictions[race.id]) ? (
                      <Box>
                        <Text fontSize="36px" mb="16px">
                          Predictions
                        </Text>

                        <Divider />

                        <RacePrediction race={race} />
                      </Box>
                    ) : (
                      <Text fontSize="36px">No predictions yet</Text>
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
