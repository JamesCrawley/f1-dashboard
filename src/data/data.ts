import { Player, Race } from '../types';

export const races: Race[] = [
  {
    id: 1,
    name: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023",
    trackName: "Bahrain International Circuit",
    country: "Bahrain",
    result: {
      pole: "Max Verstappen",
      first: "Max Verstappen",
      last: "Lando Norris",
      fastestLap: "Guanyu Zhou",
    },
  },
  {
    id: 2,
    name: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023",
    trackName: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    result: {
      pole: "Sergio Perez",
      first: "Sergio Perez",
      last: "Valtteri Bottas",
      fastestLap: "Max Verstappen",
    },
  },
  {
    id: 3,
    name: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2023",
    trackName: "Melbourne Grand Prix Circuit",
    country: "Australia",
    result: {
      pole: "Max Verstappen",
      first: "Max Verstappen",
      last: "Carlos Sainz",
      fastestLap: "Sergio Perez",
    },
  },
  {
    id: 4,
    name: "FORMULA 1 AZERBAIJAN GRAND PRIX 2023",
    trackName: "Baku City Circuit",
    country: "Azerbaijan",
  },
  {
    id: 5,
    name: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023",
    trackName: "Miami International Autodrome",
    country: "United States",
  },
  {
    id: 6,
    name: "FORMULA 1 QATAR AIRWAYS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2023",
    trackName: "Autodromo Enzo e Dino Ferrari",
    country: "Italy",
  },
  {
    id: 7,
    name: "FORMULA 1 GRAND PRIX DE MONACO 2023",
    trackName: "Circuit de Monaco",
    country: "Monaco",
  },
  {
    id: 8,
    name: "FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023",
    trackName: "Circuit de Barcelona-Catalunya",
    country: "Spain",
  },
  {
    id: 9,
    name: "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023",
    trackName: "Circuit Gilles-Villeneuve",
    country: "Canada",
  },
  {
    id: 10,
    name: "FORMULA 1 GROSSER PREIS VON ÖSTERREICH 2023",
    trackName: "Red Bull Ring",
    country: "Austria",
  },
  {
    id: 11,
    name: "FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023",
    trackName: "Silverstone Circuit",
    country: "Great Britain",
  },
  {
    id: 12,
    name: "FORMULA 1 QATAR AIRWAYS HUNGARIAN GRAND PRIX 2023",
    trackName: "Hungaroring",
    country: "Hungary",
  },
  {
    id: 13,
    name: "FORMULA 1 BELGIAN GRAND PRIX 2023",
    trackName: "Circuit de Spa-Francorchamps",
    country: "Belgium",
  },
  {
    id: 14,
    name: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023",
    trackName: "Circuit Zandvoort",
    country: "Netherlands",
  },
  {
    id: 15,
    name: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2023",
    trackName: "Autodromo Nazionale Monza",
    country: "Italy",
  },
  {
    id: 16,
    name: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
    trackName: "Marina Bay Street Circuit",
    country: "Singapore",
  },
  {
    id: 17,
    name: "FORMULA 1 LENOVO JAPANESE GRAND PRIX 2023",
    trackName: "Suzuka Internarional Racing Course",
    country: "Japan",
  },
  {
    id: 18,
    name: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2023",
    trackName: "Lusail International Circuit",
    country: "Qatar",
  },
  {
    id: 19,
    name: "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    trackName: "Circuit of The Americas",
    country: "United States",
  },
  {
    id: 20,
    name: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2023",
    trackName: "Autódromo Hermanos Rodríguez",
    country: "Mexico",
  },
  {
    id: 21,
    name: "FORMULA 1 ROLEX GRANDE PRÊMIO DE SÃO PAULO 2023",
    trackName: "Autódromo José Carlos Pace",
    country: "Brazil",
  },
  {
    id: 22,
    name: "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2023",
    trackName: "Las Vegas",
    country: "United States",
  },
  {
    id: 23,
    name: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023",
    trackName: "Yas Marina Circuit",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Lando Norris",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Lando Norris",
        fastestLap: "Sergio Perez",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Alex Albon",
        fastestLap: "Max Verstappen",
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
      3: {
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Guanyu Zhou",
        fastestLap: "Max Verstappen",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Max Verstappen",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Sergio Perez",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Lando Norris",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Guanyu Zhou",
        fastestLap: "Fernando Alonso",
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
      3: {
        pole: "Lance Stroll",
        first: "Max Verstappen",
        last: "Oscar Piastri",
        fastestLap: "Nico Hulkenberg",
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
      3: {
        pole: "Fernando Alonso",
        first: "Max Verstappen",
        last: "Alex Albon",
        fastestLap: "Max Verstappen",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
        fastestLap: "Fernando Alonso",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Guanyu Zhou",
        fastestLap: "Sergio Perez",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Logan Sargeant",
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
      3: {
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nyck de Vries",
        fastestLap: "Fernando Alonso",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Kevin Magnussen",
        fastestLap: "Sergio Perez",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
        fastestLap: "Charles Leclerc",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Nico Hulkenberg",
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
      3: {
        pole: "Sergio Perez",
        first: "Sergio Perez",
        last: "Nyck de Vries",
        fastestLap: "Charles Leclerc",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Oscar Piastri",
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
      3: {
        pole: "Max Verstappen",
        first: "Max Verstappen",
        last: "Yuki Tsunoda",
        fastestLap: "Fernando Alonso",
      },
    },
  },
];
