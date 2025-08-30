import Footer from "./Footer";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";
function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div
          className="flex flex-1 items-center justify-center px-[20px] sm:px-[20px] lg:px-[100px] md:px-[50px] py-[30px] 
            md:py-[40px] bg-blue-50"
        >
          <div className="bg-white w-full max-w-xl p-[40px] rounded-xl shadow-xs">
            <div className="flex flex-col text-center justify-center">
              <div className="pb-[32px]">
                <h2 className="text-3xl/11 font-semibold text-blue-600 pb-[10px]">
                  Welcome Back
                </h2>
                <p className="font-light text-stone-500 text-md lg:text-base/6">
                  Please enter your details to log in
                </p>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <form onSubmit={handleSubmit} className="mt-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Please enter your password"
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                    />
                    <label
                      htmlFor="remember-me"
                      className="pl-[10px] text-sm text-stone-400"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to="#" className="text-sm text-blue-600">
                    Forgot Password
                  </Link>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white w-full px-[10px] py-[18px] rounded-md mt-[28px] mb-[20px]"
                >
                  Log In
                </button>
              </form>

              <p className="text-stone-500 text-sm">
                Don't have an account?
                <span className="text-blue-600">
                  <Link to="/sign-up"> Sign Up</Link>
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

export default Login;
