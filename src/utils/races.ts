import { Race } from "../types";

type SplitRaces = {
  completedRaces: Race[];
  upcomingRaces: Race[];
  currentRace: Race | null;
};
export const splitRaces = (races: Race[]): SplitRaces => {
  const completedRaces: Race[] = [];
  const upcomingRaces: Race[] = [];
  let currentRace: Race | null = null;

  races.forEach((race) => {
    const { status } = race;

    if (status === "in-progress") {
      currentRace = race;
      return;
    }

    if (status === "upcoming") {
      upcomingRaces.push(race);
      return;
    }

    completedRaces.push(race);
  });

  return { completedRaces, upcomingRaces, currentRace };
};
