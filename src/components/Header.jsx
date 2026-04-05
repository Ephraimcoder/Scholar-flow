import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Scholarflowtransparent.png";

const Header = () => {
  return (
    <header className="px-6 py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center justify-center flex-1">
        <img
          src={logo}
          alt="ScholarFlow"
          className="h-40 w-auto hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <nav className="flex items-center space-x-6">
        <Link
          to="/privacy"
          className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
        >
          Privacy Policy
        </Link>
      </nav>
    </header>
  );
};

export default Header;
