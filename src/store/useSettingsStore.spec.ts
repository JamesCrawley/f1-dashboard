import { renderHook, act } from "@testing-library/react";

import { useSettingsStore } from "./useSettingsStore";

describe("useSettingsStore", () => {
  it("should have initial values", () => {
    const { result } = renderHook(() => useSettingsStore());

    expect(result.current.isCompact).toStrictEqual(false);
    expect(result.current.expandedRaces).toStrictEqual([]);
    expect(result.current.favouritePlayers).toStrictEqual([]);
  });

  describe("toggleIsCompact", () => {
    it("correctly sets the compact toggle from off -> on", () => {
      const { result } = renderHook(() => useSettingsStore());

      act(() => result.current.toggleIsCompact());

      expect(result.current.isCompact).toStrictEqual(true);
    });

    it("correctly sets the compact toggle from on -> off", () => {
      const { result } = renderHook(() => useSettingsStore());

      result.current.isCompact = true;

      act(() => result.current.toggleIsCompact());

      expect(result.current.isCompact).toStrictEqual(false);
    });
  });

  describe("toggleFavouritePlayer", () => {
    it("correctly sets a player as favourite", () => {
      const { result } = renderHook(() => useSettingsStore());

      result.current.favouritePlayers = [2, 6, 4];

      act(() => result.current.toggleFavouritePlayer(1));

      expect(result.current.favouritePlayers).toStrictEqual([2, 6, 4, 1]);
    });

    it("correctly removes a player as favourite", () => {
      const { result } = renderHook(() => useSettingsStore());

      result.current.favouritePlayers = [5, 1, 7];

      act(() => result.current.toggleFavouritePlayer(1));

      expect(result.current.favouritePlayers).toStrictEqual([5, 7]);
    });
  });

  describe("toggleExpandedRace", () => {
    it("correctly sets a race as expanded", () => {
      const { result } = renderHook(() => useSettingsStore());

      result.current.expandedRaces = [8, 9, 10];

      act(() => result.current.toggleExpandedRace(1));

      expect(result.current.expandedRaces).toStrictEqual([8, 9, 10, 1]);
    });

    it("correctly removes a race as expanded", () => {
      const { result } = renderHook(() => useSettingsStore());

      result.current.expandedRaces = [1, 2];

      act(() => result.current.toggleExpandedRace(1));

      expect(result.current.expandedRaces).toStrictEqual([2]);
    });
  });
});
