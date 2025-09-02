import Lottie from "lottie-react";
import React, { useState } from "react";
import logInLottie from "../assets/Lottie/Login.json";
import { NavLink } from "react-router";
import Title from "../Shared/Title";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  Title("Login");
  const [showPassword, SetShowPassword] = useState(false);
  return (
    <div className="md:mt-25">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: 400, height: 400 }}
            animationData={logInLottie}
            loop={true}
          />
        </div>
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl bg-[url('https://i.ibb.co.com/CpcZLrVK/Img-For-Contact-Part.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/50 before:rounded-2xl">
          <div className="card-body relative z-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p>Please LogIn to get started</p>
            <form className="fieldset">
              {/* User Email input field */}
              <label className="label">Email</label>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="mail@site.com"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              {/* User Password input field */}
              <label className="label">Password</label>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  className="w-full pr-16"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600 cursor-pointer"
                  onClick={() => {
                    SetShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-soft btn-success mt-4">
                <span className="text-lg">Login</span>
              </button>
            </form>
            {/* Google Login system */}
            <div>
              <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                <svg
                  aria-label="Google logo"
                  width="35"
                  height="35"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                <span className="text-lg">Login with Google</span>
              </button>
            </div>
            {/* Register option */}
            <div className="text-center mt-4">
              <p>
                New to our platform?{" "}
                <NavLink
                  to="/auth/register"
                  className="text-blue-500 font-bold"
                >
                  Create an account
                </NavLink>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
