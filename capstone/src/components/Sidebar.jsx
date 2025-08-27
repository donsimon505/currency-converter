import {
  HomeIcon,
  CurrencyDollarIcon,
  CogIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar hidden lg:flex flex-col md:w-2/6 lg:w-1/4 bg-white min-h-screen fixed shadow-sm pt-[30px] pb-[30px] justify-between">
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-row lg:flex-1 pl-[30px] pr-[30px]">
            <Link to="/dashboard" className="-m-1.5 p-1.5 items-center">
              <span className="sr-only">Currency Converter</span>
              <div className="flex flex-row gap-[10px] md:gap-[18px] items-center">
                <img
                  alt=""
                  src="./src/assets/Vector.svg"
                  className="h-6 w-auto"
                />
                <h3 className="text-base md:text-lg font-bold leading-none">
                  Currency Converter
                </h3>
              </div>
            </Link>
          </div>
          <hr className="text-blue-100" />
          <div className="pl-[30px] pr-[30px]">
            <ul className="flex flex-col gap-[8px]">
              <Link to="/dashboard">
                <li className="sidebar-menu menu-hover menu-active">
                  <HomeIcon className="size-4" /> Dashboard
                </li>
              </Link>
              <Link to="/favourites">
                <li className="sidebar-menu menu-hover">
                  <CurrencyDollarIcon className="size-4" /> Favourites
                </li>
              </Link>
              <Link to="/settings">
                <li className="sidebar-menu menu-hover">
                  <CogIcon className="size-4" /> Settings
                </li>
              </Link>
              <Link to="/dashboard">
                <li className="sidebar-menu menu-hover">
                  <ArrowRightStartOnRectangleIcon className="size-4" /> Log out
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <hr className="text-blue-100" />
          <div className="flex flex-row gap-[16px] pl-[30px] pr-[30px]">
            <img
              src="/src/assets/profile-img.jpg"
              alt="Profile Image"
              className="w-[38px] h-auto rounded-full"
            />
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-sm font-bold">John Doe</h1>
              <h3 className="text-xs text-blue-500">johndoe@example.com</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
