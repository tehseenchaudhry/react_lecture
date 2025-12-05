import React from "react";
import { FaUserAlt, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Fatima Chaudhry",
    email: "fatima@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Ali Raza",
    email: "ali.raza@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Ayesha Noor",
    email: "ayesha.noor@example.com",
    role: "User",
    status: "Pending",
  },
  {
    id: 4,
    name: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    role: "User",
    status: "Inactive",
  },
];

const UserPage = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
          <FaUserAlt className="text-indigo-600" /> Users
        </h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
          Add User
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white p-3 rounded-lg shadow mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search users..."
          className="ml-3 bg-transparent outline-none w-full text-gray-700"
        />
      </div>

      {/* User Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-5">Name</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Role</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-5 font-medium text-gray-700">
                  {user.name}
                </td>
                <td className="py-3 px-5 text-gray-600">{user.email}</td>
                <td className="py-3 px-5 text-gray-600">{user.role}</td>
                <td className="py-3 px-5">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-5 flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
