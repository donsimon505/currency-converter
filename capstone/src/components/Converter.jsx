import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Select from "react-select";
import useCurrencyStore from "../stores/useCurrencyStore.js";
import currencies from "../currencies.json";
import { getCurrencyData } from "../helpers/currencyHelper.js";

function Converter() {
  const {
    amount,
    fromCurrency,
    toCurrency,
    result,
    rate,
    error,
    lastUpdated,
    setAmount,
    setFromCurrency,
    setToCurrency,
    convertCurrency,
    loading,
  } = useCurrencyStore();

  // For Select Options
  const currencyOptions = Object.keys(currencies).map((currencyCode) => {
    const data = getCurrencyData(currencyCode);
    return {
      value: currencyCode,
      label: (
        <div className="flex flex-row items-center gap-[8px]">
          <img
            src={data.flag}
            alt={`${currencyCode} flag`}
            className="w-[20px] h-[14px] object-cover"
          />
          <span>
            {currencyCode} - {data.name}
          </span>
        </div>
      ),
    };
  });

  const selectedFrom = currencyOptions.find(
    (opt) => opt.value === fromCurrency
  );
  const selectedTo = currencyOptions.find((opt) => opt.value === toCurrency);

  const handleSubmit = (e) => {
    e.preventDefault();
    convertCurrency();
  };

  return (
    <>
      <div className="converter flex flex-col w-full p-[30px] py-[40px] md:p-[40px] gap-[20px] bg-white rounded-xl shadow-xs">
        <form onSubmit={handleSubmit}>
          <div className="pb-[30px]">
            <label
              htmlFor="amount"
              className="block font-medium text-left text-sm pb-[10px]"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              step="0.01"
              min="0"
              placeholder="100.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-2xl"
            />
          </div>

          <div className="flex flex-row justify-between items-end pb-[28px] gap-[20px] md:gap-[30px]">
            <div className="w-full">
              <label
                htmlFor="from_currency"
                className="block font-medium text-left text-sm pb-[10px]"
              >
                From
              </label>
              <div className="relative w-full">
                <Select
                  options={currencyOptions}
                  value={selectedFrom}
                  onChange={(opt) => setFromCurrency(opt.value)}
                />
              </div>
            </div>

            <div className="p-[10px] bg-blue-600 rounded-full">
              <ArrowsRightLeftIcon className="size-4 text-white" />
            </div>

            <div className="w-full">
              <label
                htmlFor="to_currency"
                className="block font-medium text-left text-sm pb-[10px]"
              >
                To
              </label>
              <div className="relative w-full">
                <Select
                  options={currencyOptions}
                  value={selectedTo}
                  onChange={(opt) => setToCurrency(opt.value)}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white text-sm md:text-base w-full px-[10px] py-[18px] rounded-md my-[10px] md:mt-[28px] 
                md:mb-[20px]"
          >
            {loading ? "Converting..." : "Convert"}
          </button>
        </form>

        {result && !error && (
          <div className="results-success flex flex-col gap-[12px] text-center w-full">
            <h3 className="text-neutral-500 text-md md:text-lg">
              Converted Amount
            </h3>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[7px]">
                <h1 className="text-blue-600 font-semibold text-4xl md:text-5xl tracking-wide">
                  {getCurrencyData(toCurrency).symbol} {result}
                </h1>
                <p className="text-neutral-500 text-md">
                  1 {fromCurrency} = {rate?.toFixed(4)} {toCurrency}
                </p>
              </div>
              {lastUpdated && (
                <p className="text-gray-400 text-sm">
                  Last updated:{" "}
                  {new Date(lastUpdated).toLocaleString("en-GB", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              )}
            </div>
          </div>
        )}

        {error && (
          <div className="results-error flex flex-col gap-[12px] text-center w-full">
            <h3 className="text-neutral-500 text-md md:text-lg">Sorry</h3>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[7px]">
                <h1 className="text-blue-600 font-semibold text-4xl md:text-2xl tracking-wide">
                  {error}
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Converter;
