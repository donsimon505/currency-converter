import { create } from "zustand";
import { persist } from "zustand/middleware";
import currencies from "../currencies.json";

const useCurrencyFavouriteStore = create(
  persist((set, get) => ({
    allCurrencies: Object.keys(currencies),
    favouriteCurrencies: ["USD", "GBP", "EUR"],

    searchTerm: "",

    setSearchTerm: (term) => set({ searchTerm: term }),

    addFavourite: (currencyCode) => {
      const { favouriteCurrencies } = get();
      if (!favouriteCurrencies.includes(currencyCode)) {
        set({ favouriteCurrencies: [...favouriteCurrencies, currencyCode] });
      }
    },

    removeFavourite: (currencyCode) => {
      const { favouriteCurrencies } = get();
      set({
        favouriteCurrencies: favouriteCurrencies.filter(
          (code) => code !== currencyCode
        ),
      });
    },
  }))
);

export default useCurrencyFavouriteStore;
