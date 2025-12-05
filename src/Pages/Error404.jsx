import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      
      <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>

     
    </div>
  );
};

export default NotFound;
