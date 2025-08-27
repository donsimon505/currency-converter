import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
function AllCurrenciesCard() {
  return (
    <>
      <div className="settings-card flex flex-col w-full p-[20px] md:p-[30px] gap-[22px] bg-white rounded-xl shadow-xs">
        <div className="flex flex-col gap-[18px]">
          <h1 className="text-2xl font-semibold text-blue-600">
            All Currencies
          </h1>
          <input
            type="text"
            id="fullname"
            placeholder="Search currencies..."
            className="w-full p-[14px] border text-slate-500 border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
          />
        </div>
        <hr className="text-blue-100" />
        <div className="currency-list flex flex-col gap-[16px] px-[10px]">
          <div className="currency flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-[18px]">
              <div className="avatar flex flex-col text-center items-center rounded-full px-3 py-4">
                <h4 className="text-xs font-bold text-blue-600 self-center">
                  USD
                </h4>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="text-base font-semibold">USD</h3>
                <p className="text-sm text-neutral-400">United States Dollar</p>
              </div>
            </div>
            <div className="bg-blue-600 p-2 rounded-full">
              <PlusIcon className="size-3 text-white" />
            </div>
          </div>
          <div className="currency-selected flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-[18px]">
              <div className="avatar flex flex-col text-center items-center rounded-full px-3 py-4">
                <h4 className="text-xs font-bold text-blue-600 self-center">
                  EUR
                </h4>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="text-base font-semibold">EUR</h3>
                <p className="text-sm text-neutral-400">Euro</p>
              </div>
            </div>
            <div className="bg-blue-600 p-2 rounded-full">
              <MinusIcon className="size-3 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCurrenciesCard;
