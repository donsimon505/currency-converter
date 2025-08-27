function SettingsCard() {
  return (
    <>
      <div className="settings-card flex flex-col w-full p-[30px] py-[40px] md:p-[40px] bg-white rounded-xl shadow-xs">
        <form className="flex flex-col gap-[42px]">
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-3xl lg:text-2xl font-semibold text-blue-600 text-center md:text-left">
              Personal Information
            </h1>
            <div className="flex flex-col gap-[37px]">
              <div className="flex flex-col md:flex-row gap-[37px] md:gap-[50px]">
                <div className="w-full">
                  <label
                    htmlFor="fullname"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value="John Doe"
                    disabled
                    className="w-full p-[14px] border text-slate-500 border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value="johndoe@example.com"
                    disabled
                    className="w-full p-[14px] border text-slate-500 border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[37px] md:gap-[50px]">
                <div className="w-full">
                  <label
                    htmlFor="old-password"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Old Password
                  </label>
                  <input
                    type="password"
                    id="old-password"
                    placeholder="Please enter your old password"
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please enter your new password"
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="text-blue-100" />

          <div className="float-right w-full">
            <button
              type="submit"
              className="bg-blue-600 text-white text-sm md:text-base w-full md:w-fit md:float-right px-[30px] py-[18px] 
              rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SettingsCard;
