import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="py-8 pr-20 pl-5 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between items-center max-md:flex-col">
        <div className="flex items-center gap-2 text-3xl font-bold text-black">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/54bc316094eb330e0bda616cecb3e12b733bac38?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
            alt="The Recipe Room Logo"
            className="w-10 h-10 object-contain"
          />
          <h1>The Recipe Room</h1>
        </div>
        <nav className="flex justify-between gap-16 text-2xl font-bold text-black max-md:mt-4 max-md:flex-col max-md:gap-4">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link to="/home" className="hover:text-gray-700">
            Recipe Idea
          </Link>
          <Link to="/add-recipe" className="hover:text-gray-700">
            Add Recipe
          </Link>
          <Link to="/about" className="hover:text-gray-700">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};
