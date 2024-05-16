import { Toast, toast } from "react-hot-toast";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { players } from "../data";
import { Player, Race } from "../types";

const toastOptions: Partial<Toast> = {
  position: "top-right",
  style: {
    borderRadius: "10px",
    border: "1px solid #333",
  },
};

type SettingsState = {
  expandedRaces: Array<number>;
  isCompact: boolean;
  favouritePlayers: Array<Player["id"]>;
  toggleIsCompact: () => void;
  toggleFavouritePlayer: (playerId: Player["id"]) => void;
  toggleExpandedRace: (raceId: Race["id"]) => void;
};

type MyPersist = (
  config: StateCreator<SettingsState>,
  options: PersistOptions<SettingsState>
) => StateCreator<SettingsState>;
export const useSettingsStore = create<SettingsState>()(
  (persist as MyPersist)(
    (set, get) => ({
      isCompact: false,
      expandedRaces: [],
      favouritePlayers: [],

      toggleIsCompact: () => set({ isCompact: !get().isCompact }),

      toggleFavouritePlayer: (playerId) => {
        const { favouritePlayers } = get();

        const alreadyFavourited = favouritePlayers.includes(playerId);

        set({
          favouritePlayers: alreadyFavourited
            ? favouritePlayers.filter((id) => id !== playerId)
            : [...favouritePlayers, playerId],
        });

        const { name } = players.find(({ id }) => id === playerId) ?? {};

        toast.success(
          `${name} has been ${
            alreadyFavourited ? "removed from" : "added to"
          } your favourites`,
          toastOptions
        );
      },

      toggleExpandedRace: (raceId) => {
        const { expandedRaces } = get();

        set({
          expandedRaces: expandedRaces.includes(raceId)
            ? expandedRaces.filter((id) => id !== raceId)
            : [...expandedRaces, raceId],
        });
      },
    }),
    {
      name: "settings-store",
    }
  )
);
