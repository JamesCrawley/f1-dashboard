import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { Player, Race } from "../types";

type SettingsState = {
  expandedRaceIds: ReadonlyArray<Race["id"]>;
  isCompact: boolean;
  favouritePlayerIds: ReadonlyArray<Player["id"]>;
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
      expandedRaceIds: [],
      favouritePlayerIds: [],
      toggleIsCompact: () => {
        return set({ isCompact: !get().isCompact });
      },
      toggleFavouritePlayer: (playerId) => {
        const { favouritePlayerIds } = get();

        return set({
          favouritePlayerIds: favouritePlayerIds.includes(playerId)
            ? favouritePlayerIds.filter((id) => id !== playerId)
            : [...favouritePlayerIds, playerId],
        });
      },
      toggleExpandedRace: (raceId) => {
        const { expandedRaceIds } = get();

        return set({
          expandedRaceIds: expandedRaceIds.includes(raceId)
            ? expandedRaceIds.filter((id) => id !== raceId)
            : [...expandedRaceIds, raceId],
        });
      },
    }),
    {
      name: "settings-store",
    }
  )
);
