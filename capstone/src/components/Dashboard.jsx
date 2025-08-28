import Sidebar from "./Sidebar";
import DashboardMobileMenu from "./DashboardMobileMenu";
import Converter from "./Converter";
import Footer from "./Footer";

function Dashboard() {
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
                Welcome John
              </h1>
              <p className="text-base md:text-lg font-normal text-neutral-500">
                Convert currencies with ease and confidence
              </p>
            </div>
            <Converter />
          </div>
          <div className="lg:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
