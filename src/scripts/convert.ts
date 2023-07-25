import { readFile } from "xlsx";
import { Driver, Player, PredictionKeys, RacePrediction } from "../types";
import { writeFile } from "fs";

const {
  Sheets: { Races: sheet },
} = readFile("./F1 2023 Predictor.xlsx");

const playerNames = [
  "Aaron R",
  "Ollie M",
  "Gary M",
  "Luke W",
  "Harrison R",
  "Scott B",
  "Matt H",
  "James C",
  "Harvey S",
  "Ollie S",
  "James R",
  "Sam C",
  "Lewis C",
  "Gemma R",
  "Owen M",
  "Cam B",
  "Callum A",
  "Lewis B",
  "Frank D",
  "Angela R",
  "Chloe F",
  "Charlie R",
  "Lee R",
];

const players: Player[] = [];

const columns = [
  "E",
  "G",
  "I",
  "K",
  "M",
  "O",
  "Q",
  "S",
  "U",
  "W",
  "Y",
  "AA",
  "AC",
  "AE",
  "AG",
  "AI",
  "AK",
  "AM",
  "AO",
  "AQ",
  "AS",
  "AU",
  "AW",
];

const predictionKeys: PredictionKeys[] = [
  "pole",
  "first",
  "last",
  "fastestLap",
];

const driverMapping: { [key: string]: Driver } = {
  Verstappen: "Max Verstappen",
  Perez: "Sergio Perez",
  Leclerc: "Charles Leclerc",
  Sainz: "Carlos Sainz",
  Russell: "George Russell",
  Hamilton: "Lewis Hamilton",
  Ocon: "Esteban Ocon",
  Gasly: "Pierre Gasly",
  Norris: "Lando Norris",
  Piastri: "Oscar Piastri",
  Bottas: "Valtteri Bottas",
  Zhou: "Guanyu Zhou",
  Stroll: "Lance Stroll",
  Alonso: "Fernando Alonso",
  Magnussen: "Kevin Magnussen",
  Hulkenberg: "Nico Hulkenberg",
  Tsunoda: "Yuki Tsunoda",
  "De Vries": "Nyck de Vries",
  Ricciardo: "Daniel Ricciardo",
  Albon: "Alex Albon",
  Sargeant: "Logan Sargeant",
};

columns.forEach((column, playerNum) => {
  const allPredictions: {
    [key: number]: RacePrediction;
  } = {};

  for (let raceCount = 0; raceCount < 23; raceCount++) {
    let racePrediction: RacePrediction | null = {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
    };

    for (let predictionCount = 0; predictionCount < 4; predictionCount++) {
      const value =
        sheet[`${column}${(raceCount + 1) * 4 + predictionCount}`]?.v;

      if (value === undefined) {
        racePrediction = null;
        break;
      }

      racePrediction[predictionKeys[predictionCount]] = driverMapping[value];
    }

    if (racePrediction !== null) {
      allPredictions[raceCount + 1] = racePrediction;
    }
  }

  players[playerNum] = {
    id: playerNum + 1,
    name: playerNames[playerNum],
    points: 0,
    predictions: allPredictions,
  };
});

writeFile(
  "../data/players.ts",
  `
  import { Player } from '../types';

  export const players: Player[] = ${JSON.stringify(players)}  
  `,
  () => {}
);
