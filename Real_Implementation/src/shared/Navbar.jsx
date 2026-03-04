import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseStyle =
    " text-lg px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const activeStyle = "text-blue-700 font-bold";

  const inactiveStyle = "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">MyStore</h1>

        {/* Nav Links */}
        <div className="flex gap-4">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/"
            className={"bg-blue-700 text-white rounded-md px-5 text-center py-2"}
          >
            SignUp
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
