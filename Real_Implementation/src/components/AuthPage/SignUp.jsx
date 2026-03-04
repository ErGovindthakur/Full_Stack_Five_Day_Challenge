import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">

        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Create Account
        </h2>

        <form className="">

          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-4 py-2">
            
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* Country + Password */}
          <div className="grid grid-cols-2 gap-4 py-2">

            <div>
              <label className="block mb-1 font-medium">Country</label>
              <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* Gender */}
          <div className="py-2">
            <label className="block mb-1 font-medium">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" />
                Male
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="gender" />
                Female
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="gender" />
                Other
              </label>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 py-2">
            <input type="checkbox" />
            <label>I accept the Terms & Conditions</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center pt-2">
            Already Have an Account?{" "}
            <Link to={"/login"} className="text-blue-600 font-medium">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignUp;