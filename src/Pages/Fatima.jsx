import React from "react";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

const FatimaChaudhry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 flex items-center justify-center py-16 px-6">
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-3xl w-full text-center hover:shadow-2xl transition-all duration-300">
        {/* Profile Image */}
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
          alt="Fatima Chaudhry"
          className="w-40 h-40 mx-auto rounded-full border-4 border-purple-300 object-cover mb-6"
        />

        {/* Name and Role */}
        <h1 className="text-3xl font-bold text-purple-700 mb-2">
          Fatima Chaudhry
        </h1>
        <p className="text-gray-600 text-lg mb-4">React Developer ⚛️</p>

        {/* Bio */}
        <p className="text-gray-500 leading-relaxed max-w-lg mx-auto mb-8">
          Fatima is a passionate Frontend Developer specializing in React. She
          loves building smooth, interactive, and modern web experiences using
          clean code and creative UI design. 💫
        </p>

        {/* Skills */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {[
            "React JS",
            "Tailwind CSS",
            "JavaScript",
            "Context API",
            "Responsive Design",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-pink-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition-all"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-all"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 transition-all"
          >
            <FaReact size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FatimaChaudhry;
