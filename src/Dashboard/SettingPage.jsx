import React, { useState } from "react";
import { FaUserCog, FaMoon, FaSun } from "react-icons/fa";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex-1 min-h-screen p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <FaUserCog className="text-indigo-600" /> Settings
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Profile Section */}
      <div
        className={`p-6 rounded-xl shadow-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        } mb-8`}
      >
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              defaultValue="Fatima Chaudhry"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              defaultValue="fatima@example.com"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="text"
              defaultValue="+92 300 1234567"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Role</label>
            <input
              type="text"
              defaultValue="Frontend Developer"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div
        className={`p-6 rounded-xl shadow-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        } mb-8`}
      >
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p>Password Change</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Update Password
            </button>
          </div>

          <div className="flex items-center justify-between">
            <p>Two-Factor Authentication</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Enable
            </button>
          </div>

          <div className="flex items-center justify-between">
            <p>Delete Account</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-right">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
