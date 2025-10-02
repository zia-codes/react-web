import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar2({ title, mode, toggleMode }) {
  return (
    <nav
      className={`w-full shadow-md transition-colors duration-500 ${
        mode === "light" ? "bg-white text-black" : "bg-[#0d1b2a] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Title */}
          <Link to="/" className="flex items-center space-x-2">
         
            <span className="text-xl font-bold">Zia-codes</span>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`relative transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                hover:after:w-full
                ${
                  mode === "light"
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: Dark Mode Toggle */}
          <div className="flex items-center">
            <input
              id="switchCheckDefault"
              type="checkbox"
              className="peer sr-only"
              checked={mode === "dark"}
              onChange={toggleMode}
            />
            <label
              htmlFor="switchCheckDefault"
              className="relative w-11 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-transform after:duration-300 peer-checked:after:translate-x-5"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar2.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.oneOf(["light", "dark"]),
  toggleMode: PropTypes.func.isRequired,
};

Navbar2.defaultProps = {
  title: "My App",
  mode: "dark",
};

export default Navbar2;
