import React from "react";
import {
  FaChartLine,
  FaUserAlt,
  FaShoppingCart,
  FaDollarSign,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 2400, users: 1200 },
  { month: "Feb", sales: 1398, users: 800 },
  { month: "Mar", sales: 9800, users: 3200 },
  { month: "Apr", sales: 3908, users: 2400 },
  { month: "May", sales: 4800, users: 3000 },
  { month: "Jun", sales: 3800, users: 2600 },
  { month: "Jul", sales: 4300, users: 2900 },
];

const AnalyticsPage = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
          <FaChartLine className="text-indigo-600" /> Analytics
        </h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
          Download Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Total Users</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">12,540</h2>
            </div>
            <FaUserAlt className="text-blue-600 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Total Orders</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">2,890</h2>
            </div>
            <FaShoppingCart className="text-green-600 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Revenue</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">$45,230</h2>
            </div>
            <FaDollarSign className="text-yellow-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Growth</h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">+22%</h2>
            </div>
            <FaChartLine className="text-purple-600 text-3xl" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Monthly Sales Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <Line type="monotone" dataKey="sales" stroke="#6366F1" strokeWidth={3} />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Monthly User Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#22C55E" barSize={40} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
