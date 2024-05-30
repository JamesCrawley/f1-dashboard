import { Toast, toast } from "react-hot-toast";
import { create, StateCreator } from "zustand";
import {
  persist,
  PersistOptions,
  subscribeWithSelector,
} from "zustand/middleware";

import { Player, Race } from "../types";

const toastOptions: Partial<Toast> = {
  position: "top-right",
  style: {
    borderRadius: "8px",
    padding: "16px",
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
  subscribeWithSelector(
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
  )
);

useSettingsStore.subscribe(
  (state) => state.favouritePlayers,
  (newState, prevState) => {
    if (newState.length > prevState.length) {
      toast.success("Player added to favourites", toastOptions);
    } else {
      toast.success("Player removed from favourites", toastOptions);
    }
  }
);
