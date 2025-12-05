import React from "react";
import { FaBell, FaUserCircle, FaSearch, FaBars } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between absolute w-full top-0 mt-5">
      {/* Left - Logo + Menu */}
      <div className="flex items-center gap-4">
        <FaBars className="text-gray-600 text-xl cursor-pointer hover:text-indigo-600" />
        <h1 className="text-xl font-semibold text-indigo-600 tracking-wide">
          Dashboard
        </h1>
      </div>

      {/* Center - Search bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-gray-700"
        />
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-6">
        <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-indigo-600" />
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-indigo-600" />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
