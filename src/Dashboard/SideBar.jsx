import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUserAlt,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {id:1, name: "Dashboard", icon: <FaTachometerAlt /> ,route : "/" },
    {id:2, name: "Users", icon: <FaUserAlt /> ,route : "user"},
    {id:3, name: "Analytics", icon: <FaChartBar /> ,route : "analytics" },
    {id:4, name: "Settings", icon: <FaCog /> ,route : "settings"},
  ];

  return (
    <div className="w-[25%]">
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-indigo-600 to-blue-500 min-h-screen p-5 pt-8 relative duration-300`}
      >
        {/* Toggle Button */}
        <FaBars
          className="absolute cursor-pointer -right-3 top-9 w-7 h-7 text-white bg-indigo-600 rounded-full border-2 border-white"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Logo */}
        <div className="flex items-center gap-x-4">
          <div className="bg-white p-2 rounded-lg">
            <FaTachometerAlt className="text-indigo-600 text-2xl" />
          </div>
          {isOpen && (
            <h1 className="text-white text-xl font-semibold">MyDashboard</h1>
          )}
        </div>

        {/* Menu Items */}
        <ul className="pt-8">
          {menuItems.map((menu, index) => (
           <Link to={`/dashboard/${menu.route}`} key={menu.id}> <li
              
              className="flex items-center gap-x-4 p-3 rounded-md hover:bg-indigo-500 text-white cursor-pointer mt-2"
            >
              <span className="text-lg">{menu.icon}</span>
              {isOpen && <span className="text-md font-medium">{menu.name}</span>}
            </li></Link>
          ))}

          {/* Logout */}
          <li className="flex items-center gap-x-4 p-3 rounded-md hover:bg-red-500 text-white cursor-pointer mt-8">
            <FaSignOutAlt className="text-lg" />
            {isOpen && <span className="text-md font-medium">Logout</span>}
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default DashboardSidebar;
