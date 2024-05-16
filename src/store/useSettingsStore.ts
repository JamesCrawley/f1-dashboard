import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { Player, Race } from "../types";

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
      toggleIsCompact: () => {
        return set({ isCompact: !get().isCompact });
      },
      toggleFavouritePlayer: (playerId) => {
        const { favouritePlayers } = get();

        return set({
          favouritePlayers: favouritePlayers.includes(playerId)
            ? favouritePlayers.filter((id) => id !== playerId)
            : [...favouritePlayers, playerId],
        });
      },
      toggleExpandedRace: (raceId) => {
        const { expandedRaces } = get();

        return set({
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
