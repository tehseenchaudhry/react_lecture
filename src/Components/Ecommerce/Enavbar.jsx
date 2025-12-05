import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
// import BillItem from "./EBill";

const ENavbar = () => {

  const cartItems = useSelector((store) => store.Cart)
  // const [bill, setBill] = useState(false)

  console.log(cartItems)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-600">ShopEase</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
            <Link to="/eproduct" className="text-gray-700 hover:text-purple-600 font-medium">Shop</Link>
            <Link to="" className="text-gray-700 hover:text-purple-600 font-medium">About</Link>
            <Link to="" className="text-gray-700 hover:text-purple-600 font-medium">Contact</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border rounded-lg px-2 py-1 border-gray-300">
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none px-2 py-1 w-48 sm:w-64"
            />
            <button className="text-gray-600 hover:text-purple-600">
              <FaSearch />
            </button>
          </div>

          {/* Cart & User Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
          <Link to="/cart">  <div
            // onClick={()=>setBill(!bill)}
            className="relative">
              <FaShoppingCart className="text-gray-700 text-xl hover:text-purple-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </div></Link>

            {/* User */}
            <FaUser className="text-gray-700 text-xl hover:text-purple-600 cursor-pointer" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-purple-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    {/* {bill?  <BillItem /> : ""} */}
    </nav>
  );
};

export default ENavbar;
