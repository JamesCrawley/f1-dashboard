import { Player, Race } from '../types';

export const races: Race[] = [
  {
    id: 1,
    name: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023",
    country: "Bahrain",
    result: {
      pole: "Max Verstappen",
      first: "Max Verstappen",
      fastestLap: "Guanyu Zhou",
      last: "Lando Norris",
    },
  },
  {
    id: 2,
    name: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023",
    country: "Saudi Arabia",
    result: {
      pole: "Sergio Perez",
      first: "Sergio Perez",
      fastestLap: "Max Verstappen",
      last: "Valtteri Bottas",
    },
  },
  {
    id: 3,
    name: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2023",
    country: "Australia",
  },
  {
    id: 4,
    name: "FORMULA 1 AZERBAIJAN GRAND PRIX 2023",
    country: "Azerbaijan",
  },
  {
    id: 5,
    name: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023",
    country: "United States",
  },
  {
    id: 6,
    name: "FORMULA 1 QATAR AIRWAYS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2023",
    country: "Italy",
  },
  {
    id: 7,
    name: "FORMULA 1 GRAND PRIX DE MONACO 2023",
    country: "Monaco",
  },
  {
    id: 8,
    name: "FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023",
    country: "Spain",
  },
  {
    id: 9,
    name: "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023",
    country: "Canada",
  },
  {
    id: 10,
    name: "FORMULA 1 GROSSER PREIS VON ÖSTERREICH 2023",
    country: "Austria",
  },
  {
    id: 11,
    name: "FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023",
    country: "Austria",
  },
  {
    id: 12,
    name: "FORMULA 1 QATAR AIRWAYS HUNGARIAN GRAND PRIX 2023",
    country: "Hungary",
  },
  {
    id: 13,
    name: "FORMULA 1 QATAR AIRWAYS HUNGARIAN GRAND PRIX 2023",
    country: "Hungary",
  },
  {
    id: 14,
    name: "FORMULA 1 BELGIAN GRAND PRIX 2023",
    country: "Belgium",
  },
  {
    id: 15,
    name: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023",
    country: "Netherlands",
  },
  {
    id: 16,
    name: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2023",
    country: "Italy",
  },
  {
    id: 17,
    name: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
    country: "Singapore",
  },
  {
    id: 18,
    name: "FORMULA 1 LENOVO JAPANESE GRAND PRIX 2023",
    country: "Japan",
  },
  {
    id: 19,
    name: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2023",
    country: "Qatar",
  },
  {
    id: 20,
    name: "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    country: "United States",
  },
  {
    id: 21,
    name: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2023",
    country: "Mexico",
  },
  {
    id: 22,
    name: "FORMULA 1 ROLEX GRANDE PRÊMIO DE SÃO PAULO 2023",
    country: "Brazil",
  },
  {
    id: 23,
    name: "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2023",
    country: "United States",
  },
  {
    id: 24,
    name: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023",
    country: "Abu Dhabi",
  },
];

export const players: Player[] = [
  {
    id: 1,
    name: "Aaron R",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Fernando Alonso",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Charles Leclerc",
      },
    },
  },
  {
    id: 2,
    name: "Ollie M",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Alex Albon",
        fastestLap: "Carlos Sainz",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Guanyu Zhou",
        fastestLap: "Charles Leclerc",
      },
    },
  },
  {
    id: 3,
    name: "Gary M",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Fernando Alonso",
      },
      2: {
        pole: "Fernando Alonso",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Fernando Alonso",
      },
    },
  },
  {
    id: 4,
    name: "Luke W",
    points: 0,
    predictions: {
      1: {
        pole: "Charles Leclerc",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Max Verstappen",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Lando Norris",
        fastestLap: "Max Verstappen",
      },
    },
  },
  {
    id: 5,
    name: "Harrison R",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Max Verstappen",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Fernando Alonso",
      },
    },
  },
  {
    id: 6,
    name: "Scott B",
    points: 0,
    predictions: {
      1: {
        pole: "Charles Leclerc",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Max Verstappen",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Fernando Alonso",
      },
    },
  },
  {
    id: 7,
    name: "Matt H",
    points: 0,
    predictions: {
      1: {
        pole: "Charles Leclerc",
        first: "Charles Leclerc",
        last: "Lance Stroll",
        fastestLap: "Max Verstappen",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Charles Leclerc",
      },
    },
  },
  {
    id: 8,
    name: "James C",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Max Verstappen",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Max Verstappen",
      },
    },
  },
  {
    id: 9,
    name: "Harvey S",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Fernando Alonso",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Max Verstappen",
      },
    },
  },
  {
    id: 10,
    name: "Ollie S",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Max Verstappen",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Guanyu Zhou",
        fastestLap: "Sergio Perez",
      },
    },
  },
  {
    id: 11,
    name: "James R",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Fernando Alonso",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Fernando Alonso",
      },
    },
  },
  {
    id: 12,
    name: "Sam C",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Fernando Alonso",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Max Verstappen",
      },
    },
  },
  {
    id: 13,
    name: "Lewis C",
    points: 0,
    predictions: {
      1: {
        pole: "Charles Leclerc",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Sergio Perez",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Charles Leclerc",
      },
    },
  },
  {
    id: 14,
    name: "Gemma R",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Sergio Perez",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Sergio Perez",
      },
    },
  },
  {
    id: 15,
    name: "Owen M",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Alex Albon",
        fastestLap: "Sergio Perez",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Max Verstappen",
      },
    },
  },
  {
    id: 16,
    name: "Cam B",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Sergio Perez",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Sergio Perez",
      },
    },
  },
  {
    id: 17,
    name: "Callum A",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Sergio Perez",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Charles Leclerc",
      },
    },
  },
  {
    id: 18,
    name: "Lewis B",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Fernando Alonso",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Sergio Perez",
      },
    },
  },
  {
    id: 19,
    name: "Frank D",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Guanyu Zhou",
        fastestLap: "Carlos Sainz",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Sergio Perez",
      },
    },
  },
  {
    id: 20,
    name: "Angela R",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Kevin Magnussen",
        fastestLap: "George Russell",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Sergio Perez",
      },
    },
  },
  {
    id: 21,
    name: "Chloe F",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "George Russell",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Sergio Perez",
      },
    },
  },
  {
    id: 22,
    name: "Charlie R",
    points: 0,
    predictions: {
      1: {
        first: "Charles Leclerc",
        pole: "Max Verstappen",
        last: "Guanyu Zhou",
        fastestLap: "Max Verstappen",
      },
      2: {
        first: "Max Verstappen",
        pole: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Max Verstappen",
      },
    },
  },
  {
    id: 23,
    name: "Lee R",
    points: 0,
    predictions: {
      1: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "George Russell",
      },
      2: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Lando Norris",
        fastestLap: "Charles Leclerc",
      },
    },
  },
];
