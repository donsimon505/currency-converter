import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_CURRENCY_CONVERTER_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const useCurrencyStore = create((set, get) => ({
  amount: "",
  fromCurrency: "USD",
  toCurrency: "GBP",
  result: null,
  rate: null,
  loading: false,
  error: null,
  lastUpdated: null,

  setAmount: (value) => set({ amount: value, result: null, rate: null }),
  setFromCurrency: (currencyCode) =>
    set({ fromCurrency: currencyCode, result: null, rate: null }),
  setToCurrency: (currencyCode) =>
    set({ toCurrency: currencyCode, result: null, rate: null }),

  convertCurrency: async () => {
    const { fromCurrency, toCurrency, amount } = get();

    set({ loading: true, error: null, result: null });

    try {
      const res = await axios.get(
        `${BASE_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`
      );

      if (res.data && res.data.result === "success") {
        set({
          result: res.data.conversion_result,
          rate: res.data.conversion_rate,
          lastUpdated: res.data.time_last_update_utc,
          loading: false,
        });
      } else {
        set({
          error: "Invalid response from API",
          loading: false,
        });
      }
    } catch (err) {
      set({
        error: err.message || "Error Fetching Exchange from Provider",
        loading: false,
      });
    }
  },
}));

export default useCurrencyStore;
