import Sidebar from "./Sidebar";
import DashboardMobileMenu from "./DashboardMobileMenu";
import SettingsCard from "./SettingsCard";
import Footer from "./Footer";

function Settings() {
  return (
    <>
      <DashboardMobileMenu />
      <div>
        <Sidebar />
        <div>
          <div
            className="w-full lg:w-3/4 lg:ml-[25%] bg-blue-50 min-h-screen px-6 py-[45px] lg:p-[50px] flex flex-col 
          gap-[30px]"
          >
            <div className="flex flex-col gap-[6px] text-center lg:text-left">
              <h1 className="text-4xl lg:text-3xl font-semibold text-blue-600">
                Settings
              </h1>
            </div>
            <SettingsCard />
          </div>
          <div className="lg:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
