import Footer from "./Footer";
import Header from "./Header";
import {
  CurrencyDollarIcon,
  StarIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div
          className="flex flex-col-reverse md:flex-row items-center px-6 lg:px-8 py-[50px] md:py-[80px] lg:py-0 mx-auto max-w-7xl 
          lg:min-h-[72vh] gap-10 md:gap-15 lg:gap-30"
        >
          <div className="basis-1/2 text-center md:text-left">
            <div className="text-white pb-[40px] md:pb-7 lg:pb-[35px]">
              <h1 className="text-5xl/14 md:text-4xl/11 lg:text-5xl/14 font-semibold px-8 md:px-0 pb-[18px] md:pb-[12px] lg:pb-[18px]">
                Convert Currencies <br></br> with Ease
              </h1>
              <p className="font-light text-lg/6 md:text-sm lg:text-base/6">
                Get real-time exchange rates, historical data, and a
                user-friendly interface for all your currency conversion needs.
              </p>
            </div>
            <Link
              to="/sign-up"
              className="px-[24px] md:px-[17px] lg:px-[24px] py-[18px] md:py-[14px] lg:py-[18px] font-medium text-lg md:text-sm rounded-md
               bg-white text-blue-600"
            >
              Start Converting
            </Link>
          </div>
          <div className="basis-1/2">
            <img src="./src/assets/hero-img.jpg" alt="" className="h-full" />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div
        className="flex flex-col px-6 lg:px-8 py-[50px] lg:py-[80px] mx-auto max-w-7xl gap-12"
        id="features"
      >
        <div className="flex flex-col text-center justify-center items-center">
          <h2 className="text-4xl/11 font-semibold text-blue-600 pb-[14px]">
            Key Features
          </h2>
          <p className="font-light md:px-[100px] lg:px-[25%] text-lg/6 md:text-sm lg:text-base/6">
            Get real-time exchange rates, historical data, and a user-friendly
            interface for all your currency conversion needs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-24 text-center">
          <div className="justify-items-center px-1 md:px-0 lg:px-10">
            <CurrencyDollarIcon className="size-8 md:size-7 text-blue-600 mb-[18px] md:mb-[12px]" />
            <h3 className="text-xl md:text-base font-semibold pb-[8px] md:pb-[6px]">
              Real-Time Exchange Rates
            </h3>
            <p className="text-lg md:text-sm text-gray-500">
              Access up-to-the-minute exchange rates for a wide range of
              currencies.
            </p>
          </div>

          <div className="justify-items-center px-1 md:px-0 lg:px-10">
            <StarIcon className="size-8 md:size-7 text-blue-600 mb-[18px] md:mb-[12px]" />
            <h3 className="text-xl md:text-base font-semibold pb-[8px] md:pb-[6px]">
              Add Favourites
            </h3>
            <p className="text-lg md:text-sm text-gray-500">
              Select your favourite currencies and convert on the fly.
            </p>
          </div>

          <div className="justify-items-center px-1 md:px-0 lg:px-10">
            <PresentationChartLineIcon className="size-8 md:size-7 text-blue-600 mb-[18px] md:mb-[12px]" />
            <h3 className="text-xl md:text-base font-semibold pb-[8px] md:pb-[6px]">
              User-Friendly Interface
            </h3>
            <p className="text-lg md:text-sm text-gray-500">
              Enjoy a seamless and inuitive experience with our easy-to-use
              design.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative flex flex-col px-6 lg:px-8 py-[120px] lg:py-[80px] gap-12 bg-[url(./src/assets/cta.jpg)] bg-no-repeat bg-cover
       bg-center text-white lg:min-h-[64vh] justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col text-center justify-center items-center gap-6 z-50">
          <div>
            <h2 className="text-4xl/11 font-semibold pb-[14px]">
              Start Converting
            </h2>
            <p className="font-light md:px-[100px] lg:px-[12%] text-lg/6 md:text-sm lg:text-base/6">
              Get real-time exchange rates, historical data, and a user-friendly
              interface for all your currency conversion needs.
            </p>
          </div>
          <Link
            to="/sign-up"
            className="px-[24px] md:px-[17px] lg:px-[24px] py-[18px] md:py-[14px] lg:py-[16px] font-medium text-lg md:text-sm rounded-md
               bg-white text-black"
          >
            Get Started
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
