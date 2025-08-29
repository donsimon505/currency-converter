import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import useCurrencyFavouriteStore from "../stores/useCurrencyFavouriteStore";
import { getCurrencyData } from "../helpers/currencyHelper";
function AllCurrenciesCard() {
  const {
    allCurrencies,
    favouriteCurrencies,
    addFavourite,
    removeFavourite,
    searchTerm,
    setSearchTerm,
  } = useCurrencyFavouriteStore();

  const filteredCurrencies = allCurrencies.filter((currencyCode) => {
    const data = getCurrencyData(currencyCode);
    return (
      currencyCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className="settings-card flex flex-col w-full p-[20px] md:p-[30px] gap-[22px] bg-white rounded-xl shadow-xs">
        <div className="flex flex-col gap-[18px]">
          <h1 className="text-2xl font-semibold text-blue-600">
            All Currencies
          </h1>
          <input
            type="text"
            placeholder="Search currencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-[14px] border text-slate-500 border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
          />
        </div>
        <hr className="text-blue-100" />
        <div className="currency-list flex flex-col gap-[16px] px-[10px] h-[300px] overflow-y-auto">
          {filteredCurrencies.map((currencyCode) => {
            const isFavourite = favouriteCurrencies.includes(currencyCode);
            const data = getCurrencyData(currencyCode);

            return (
              <div
                key={currencyCode}
                className={`${
                  isFavourite ? "currency-selected" : "currency"
                } flex flex-row w-full justify-between items-center`}
              >
                <div className="flex flex-row items-center gap-[18px]">
                  <div className="avatar flex flex-col text-center items-center rounded-full px-3 py-4 bg-blue-100">
                    <h4 className="text-xs font-bold text-blue-600">
                      {currencyCode}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <h3 className="text-base font-semibold">{currencyCode}</h3>
                    <p className="text-sm text-neutral-400">{data.name}</p>
                  </div>
                </div>
                <div
                  className="p-2 rounded-full bg-blue-600 cursor-pointer"
                  onClick={() =>
                    isFavourite
                      ? removeFavourite(currencyCode)
                      : addFavourite(currencyCode)
                  }
                >
                  {isFavourite ? (
                    <MinusIcon className="size-3 text-white" />
                  ) : (
                    <PlusIcon className="size-3 text-white" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllCurrenciesCard;
