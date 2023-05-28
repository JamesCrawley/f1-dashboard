import { Player, Race, Result } from "../types";

// TODO: Rename this
export const getPlayersWithPoints = (p: Player[], r: Race[]) => {
  const { completedRaces } = splitRaces(r);

  const players = [...p].map((player) => {
    let points = 0;

    completedRaces.forEach((race) => {
      if (race.status === "cancelled" || player.predictions[race.id] === null) {
        return;
      }

      let pointsToAdd = 0;

      const { predictions } = player;

      if (predictions[race.id]?.pole === (race.result as Result).pole) {
        pointsToAdd += 5;
      }

      if (predictions[race.id]?.first === (race.result as Result).first) {
        pointsToAdd += 5;
      }

      if (predictions[race.id]?.last === (race.result as Result).last) {
        pointsToAdd += 5;
      }

      if (
        predictions[race.id]?.fastestLap === (race.result as Result).fastestLap
      ) {
        pointsToAdd += 5;
      }

      // if the player got all 4 right, then they
      if (pointsToAdd === 20) pointsToAdd += 5;

      points += pointsToAdd;
    });

    return {
      ...player,
      points,
    };
  });

  return { players };
};

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
    const { result, status } = race;

    if (status === "in-progress") {
      currentRace = race;
      return;
    }

    if (result?.first || status === "cancelled") {
      completedRaces.push(race);
    } else {
      upcomingRaces.push(race);
    }
  });

  return { completedRaces, upcomingRaces, currentRace };
};

export const getOrdinal = (n: number) => {
  let ord = "th";

  if (n % 10 === 1 && n % 100 !== 11) {
    ord = "st";
  } else if (n % 10 === 2 && n % 100 !== 12) {
    ord = "nd";
  } else if (n % 10 === 3 && n % 100 !== 13) {
    ord = "rd";
  }

  return ord;
};
