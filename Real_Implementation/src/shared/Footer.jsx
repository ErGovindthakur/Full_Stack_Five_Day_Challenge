import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">MyStore</h2>
          <p className="text-sm text-gray-400">
            A modern shopping platform where you can explore products and
            manage your account easily.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/products"
                className="hover:text-white transition"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-white transition"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-white transition"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;