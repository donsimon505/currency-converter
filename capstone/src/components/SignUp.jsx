import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div
          className="flex flex-1 items-center justify-center px-[20px] sm:px-[20px] lg:px-[100px] md:px-[50px] py-[30px] 
            md:py-[40px] bg-blue-50"
        >
          <div className="bg-white w-full max-w-xl px-[20px] py-[40px] md:p-[40px] rounded-xl shadow-xs">
            <div className="flex flex-col text-center justify-center">
              <div className="pb-[32px]">
                <h2 className="text-3xl font-semibold text-blue-600 pb-[10px]">
                  Create Your Account
                </h2>
                <p className="font-light text-stone-500 text-md lg:text-base/6">
                  Seamless currency conversion starts here
                </p>
              </div>
              <form>
                <div className="pb-[30px]">
                  <label
                    htmlFor="fullname"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="John Doe"
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="pb-[30px]">
                  <label
                    htmlFor="email"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="pb-[26px]">
                  <label
                    htmlFor="password"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please enter your password"
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="pb-[26px]">
                  <label
                    htmlFor="verify-password"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Retype Password
                  </label>
                  <input
                    type="password"
                    id="verify-password"
                    placeholder="Please retype your password"
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white w-full px-[10px] py-[18px] rounded-md mt-[10px] mb-[20px]"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-stone-500 text-sm">
                Already have an account?
                <span className="text-blue-600">
                  <Link to="/login"> Log In</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignUp;
