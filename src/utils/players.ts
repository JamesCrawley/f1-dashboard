import { Player, Race, Result } from "../types";
import { splitRaces } from ".";

export const getPlayersWithPoints = (p: Player[], r: Race[]) => {
  const { completedRaces, currentRace } = splitRaces(r);

  const players = p.map((player) => {
    let points = 0;

    const { predictions } = player;

    if (currentRace?.result?.pole) {
      if (predictions[currentRace.id].pole === currentRace.result.pole) {
        points += 5;
      }
    }

    completedRaces.forEach((race) => {
      if (race.status === "cancelled" || player.predictions[race.id] === null) {
        return;
      }

      let pointsToAdd = 0;

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

  return players;
};
