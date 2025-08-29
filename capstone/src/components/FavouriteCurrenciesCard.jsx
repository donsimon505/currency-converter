import { TrashIcon } from "@heroicons/react/24/outline";
import useCurrencyFavouriteStore from "../stores/useCurrencyFavouriteStore";
import { getCurrencyData } from "../helpers/currencyHelper";
function FavouriteCurrenciesCard() {
  const { favouriteCurrencies, removeFavourite } = useCurrencyFavouriteStore();

  return (
    <>
      <div className="settings-card flex flex-col w-full p-[20px] md:p-[30px] gap-[22px] bg-white rounded-xl shadow-xs">
        <div className="flex flex-col gap-[8px] lg:gap-[11px]">
          <h1 className="text-2xl font-semibold text-blue-600">
            Your Favourites
          </h1>
          <p className="text-md font-normal text-neutral-500">
            View all favourite currencies
          </p>
        </div>
        <hr className="text-blue-100" />
        <div className="favourite-list flex flex-col gap-[28px] px-[10px] h-[300px] overflow-y-auto">
          {favouriteCurrencies.length === 0 ? (
            <p className="text-neutral-400 text-sm">No favourites added yet</p>
          ) : (
            favouriteCurrencies.map((currencyCode) => {
              const data = getCurrencyData(currencyCode);
              return (
                <div
                  key={currencyCode}
                  className="favourite-item flex flex-row w-full justify-between items-center"
                >
                  <div className="flex flex-row items-center gap-[18px]">
                    <div className="bg-blue-100 flex flex-col text-center items-center rounded-full px-3 py-4">
                      <h4 className="text-xs font-bold text-blue-600">
                        {currencyCode}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="text-base font-semibold">
                        {currencyCode}
                      </h3>
                      <p className="text-sm text-neutral-400">{data.name}</p>
                    </div>
                  </div>
                  <TrashIcon
                    className="size-4 text-red-700 cursor-pointer"
                    onClick={() => removeFavourite(currencyCode)}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default FavouriteCurrenciesCard;
