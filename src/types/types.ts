type Country =
  | "Bahrain"
  | "Saudi Arabia"
  | "Australia"
  | "Azerbaijan"
  | "United States"
  | "Italy"
  | "Monaco"
  | "Spain"
  | "Canada"
  | "Austria"
  | "Great Britain"
  | "Hungary"
  | "Belgium"
  | "Netherlands"
  | "Singapore"
  | "Japan"
  | "Qatar"
  | "Mexico"
  | "Brazil"
  | "Abu Dhabi";

export type Team =
  | "Red Bull Racing"
  | "Ferrari"
  | "Mercedes"
  | "Alpine"
  | "McLaren"
  | "Alfa Romeo"
  | "Aston Martin"
  | "Haas"
  | "AlphaTauri"
  | "Williams";

export type Driver =
  | "Max Verstappen"
  | "Sergio Perez"
  | "Charles Leclerc"
  | "Carlos Sainz"
  | "George Russell"
  | "Lewis Hamilton"
  | "Esteban Ocon"
  | "Pierre Gasly"
  | "Lando Norris"
  | "Oscar Piastri"
  | "Valtteri Bottas"
  | "Guanyu Zhou"
  | "Lance Stroll"
  | "Fernando Alonso"
  | "Kevin Magnussen"
  | "Nico Hulkenberg"
  | "Yuki Tsunoda"
  | "Nyck de Vries"
  | "Alex Albon"
  | "Logan Sargeant";

export type Race = {
  id: number;
  name: string;
  trackName: string;
  country: Country;
  status: "completed" | "upcoming" | "in-progress" | "cancelled";
  result?: Result;
};

export type Player = {
  id: number;
  name: string;
  points: number;
  predictions: Predictions;
};

export type Result = {
  pole: Driver;
  first?: Driver;
  last?: Driver;
  fastestLap?: Driver;
};

export type PredictionKeys = "pole" | "first" | "last" | "fastestLap";
export type RacePrediction = Record<PredictionKeys, Driver | null>;

export type Predictions = { [raceId: string]: RacePrediction };
