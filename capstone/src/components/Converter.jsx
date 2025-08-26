import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
function Converter() {
  return (
    <>
      <div className="converter flex flex-col w-full p-[30px] py-[40px] md:p-[40px] gap-[20px] bg-white rounded-xl shadow-xs">
        <form>
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
              placeholder="100.00"
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
                <select
                  name="from_currency"
                  id="from_currency"
                  className="w-full p-[14px] pr-10 appearance-none border border-slate-400 focus:border-black rounded 
                      focus:shadow-sm text-sm md:text-base"
                >
                  <option value="usd">USD - US Dollar</option>
                  <option value="gbp">GBP - British Pound</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.24 4.64a.75.75 0 01-1.08 0l-4.24-4.64a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-[10px] bg-blue-600 rounded-full mb-[10px]">
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
                <select
                  name="to_currency"
                  id="to_currency"
                  className="w-full p-[14px] pr-10 appearance-none border border-slate-400 focus:border-black rounded 
                      focus:shadow-sm text-sm md:text-base"
                >
                  <option value="usd">USD - US Dollar</option>
                  <option value="gbp">GBP - British Pound</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.24 4.64a.75.75 0 01-1.08 0l-4.24-4.64a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white text-sm md:text-base w-full px-[10px] py-[18px] rounded-md my-[10px] md:mt-[28px] 
                md:mb-[20px]"
          >
            Convert
          </button>
        </form>

        <div className="results flex flex-col gap-[12px] text-center w-full">
          <h3 className="text-neutral-500 text-md md:text-lg">
            Converted Amount
          </h3>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[7px]">
              <h1 className="text-blue-600 font-semibold text-4xl md:text-5xl tracking-wide">
                £85.00
              </h1>
              <p className="text-neutral-500 text-md">1 USD = 0.8500 GBP</p>
            </div>
            <p className="text-gray-400 text-sm">
              Last updated: Oct 26, 2025, 10:30 AM GMT
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Converter;
