import { TrashIcon } from "@heroicons/react/24/outline";
function FavouriteCurrenciesCard() {
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
        <div className="favourite-list flex flex-col gap-[28px] px-[10px]">
          <div className="favourite-item flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-[18px]">
              <div className="bg-blue-100 flex flex-col text-center items-center rounded-full px-3 py-4">
                <h4 className="text-xs font-bold text-blue-600 self-center">
                  USD
                </h4>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="text-base font-semibold">USD</h3>
                <p className="text-sm text-neutral-400">United States Dollar</p>
              </div>
            </div>
            <TrashIcon className="size-4 text-red-700" />
          </div>
          <div className="favourite-item flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-[18px]">
              <div className="bg-blue-100 flex flex-col text-center items-center rounded-full px-3 py-4">
                <h4 className="text-xs font-bold text-blue-600 self-center">
                  EUR
                </h4>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="text-base font-semibold">EUR</h3>
                <p className="text-sm text-neutral-400">Euro</p>
              </div>
            </div>
            <TrashIcon className="size-4 text-red-700" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FavouriteCurrenciesCard;
