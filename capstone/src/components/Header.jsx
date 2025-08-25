import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex lg:min-h-[11vh] max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex flex-row lg:flex-1 self-center">
          <Link to="/" className="-m-1.5 p-1.5 items-center">
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
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-[25px] items-center">
          <ul className="flex justify-end space-x-[25px] basis-4/12 text-xs sm:text-xs lg:text-sm md:text-sm">
            <li>
              <Link
                to="/"
                className="text-sm/6 font-semibold text-gray-900 hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#features"
                className="text-sm/6 font-semibold text-gray-900 hover:text-blue-600"
              >
                Features
              </HashLink>
            </li>
          </ul>
          <Link
            to="/sign-up"
            className="bg-blue-600 text-sm/6 font-medium py-[10px] px-[19px] text-white rounded-md"
          >
            Get Started
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Currency Converter</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <HashLink
                  smooth
                  to="/#features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </HashLink>
              </div>
              <div className="py-6">
                <Link
                  to="/sign-up"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
