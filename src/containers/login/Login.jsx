import "./lgoin.css";
import React from "react";

import LoginImage from '../../assets/images/login.jpg';

const Login = () => {
  return (
    <div className="w-full min-h-full flex items-center justify-center border-4 border-red-900">
      <form action="" className="w-4/5 ">
        {/* <div className="absolute top-0 left-1/2 h-2 w-32 rounded-b-md bg-blue-950"></div> */}
        <div className="flex flex-col md:flex-row gap-10 border bg-white rounded-md py-10 px-8">
            <img src={LoginImage} alt="login" className="w-2/3 sm:w-1/2 h-auto rounded-md mx-auto" />
          <div className="w-full flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="emailID" className="text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="emailID"
                placeholder="Your Email..."
                className="border border-gray-500 rounded-md bg-gray-100 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="passID" className="text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="passID"
                placeholder="********"
                className="border border-gray-500 rounded-md bg-gray-100 px-2 py-1"
              />
            </div>
            <div className=" flex justify-center">
              <button
                type="button"
                class=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-8 py-2 text-center mt-4 "
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
