import React, { useState } from "react";

import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    console.log("Sign In clicked");
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="Header-Image"
        />
      </div>
      <form className="absolute bg-black w-4/12 p-20 my-48 mx-auto right-0 left-0 flex flex-col text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-5xl p-2 my-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-black rounded-lg border border-white-900 bg-opacity-30"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full bg-black rounded-lg  border border-white-900 bg-opacity-30"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-black rounded-lg border border-white-900 bg-opacity-30"
        />
        <button className="bg-red-700 p-4 my-2 w-full rounded-lg text-2xl hover:bg-red-800">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && <p className="text-center text-xl p-2">OR</p>}
        {isSignInForm && (
          <button className="bg-gray-700 hover:bg-gray-800 rounded-lg p-4 my-2 w-full text-2xl">
            Use a Sign-in code
          </button>
        )}
        <p
          className="text-center text-xl py-2 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
