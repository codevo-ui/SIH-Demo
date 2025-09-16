import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Title */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          SIH Demo
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recommendations" className="hover:text-gray-200">
                Recommendations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
