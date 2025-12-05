import React, { useContext } from "react";
import {ContextData} from "../Components/Context/Context"
import { FaUserAlt, FaShoppingCart, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const DashboardMain = () => {

 const {countValue} = useContext(ContextData)

 console.log("Main",countValue);
 
  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-6 w-[80%]">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Dashboard Overview</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Total Users</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">1,245</h2>
            </div>
            <FaUserAlt className="text-indigo-600 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Counter</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">{countValue}</h2>
            </div>
            <FaShoppingCart className="text-blue-600 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Revenue</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">$12,560</h2>
            </div>
            <FaMoneyBillWave className="text-green-600 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Growth</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">+18%</h2>
            </div>
            <FaChartLine className="text-purple-600 text-3xl" />
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Activity
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li>🟢 New user <b>Sarah Khan</b> joined the platform</li>
          <li>🔵 Order <b>#1045</b> has been placed successfully</li>
          <li>🟡 Monthly revenue target reached 85%</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMain;
