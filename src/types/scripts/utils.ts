import { CompletedRace, Player, Predictions, Race } from '../types';

export const getPlayersWithPoints = (p: Player[], r: Race[]) => {
  const completedRaces: CompletedRace[] = [];

  r.some((race) => {
    if (race.result) {
      completedRaces.push(race as CompletedRace);
    } else {
      return true;
    }
  });

  const players = [...p].map((player) => {
    let points = 0;

    completedRaces.forEach((race) => {
      if (player.predictions[race.id] === null) {
        return;
      }

      let pointsToAdd = 0;

      const { predictions } = player;
      if (predictions[race.id]?.pole === race.result.pole) {
        pointsToAdd += 5;
      }

      if (predictions[race.id]?.first === race.result.first) {
        pointsToAdd += 5;
      }

      if (predictions[race.id]?.last === race.result.last) {
        pointsToAdd += 5;
      }

      if (predictions[race.id]?.fastestLap === race.result.fastestLap) {
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

export const getOrdinal = (n: number) => {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return ord;
};
