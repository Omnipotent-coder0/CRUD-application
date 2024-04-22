import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="absolute h-screen flex justify-center items-center top-0 left-0 w-screen">
      <div className="bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <div className="px-4 py-2 text-center text-white">
          <h1 className="text-3xl font-semibold">Login</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="m-6 flex flex-col gap-4 text-white font-medium text-lg"
        >
          <div>
            <label htmlFor="username">Email </label>
            <br />
            <input
              type="email"
              minLength={4}
              maxLength={20}
              required
              name="username"
              id="username"
              className="bg-black/50 outline-none  p-1 rounded-md text-base font-normal w-full"
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <br />
            <input
              type="password"
              minLength={6}
              maxLength={20}
              required
              name="password"
              id="password"
              className="bg-black/50 outline-none  p-1 rounded-md text-base font-normal w-full"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-2 py-1 bg-blue-500 hover:bg-blue-600 w-min align-middle rounded-md"
            >
              Login
            </button>
          </div>
          <h4 className="font-medium text-sm">
            Didn't have an Account ?{" "}
            <span className="text-emerald-400 hover:text-emerald-500 cursor-pointer">
              <Link to={"/signup"}>Singup</Link>
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
