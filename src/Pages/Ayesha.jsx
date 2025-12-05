import React from "react";
import { FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";

const AishaKhan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 flex items-center justify-center py-16 px-6">
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-3xl w-full text-center hover:shadow-2xl transition-all duration-300">
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/300?img=47"
          alt="Aisha Khan"
          className="w-40 h-40 mx-auto rounded-full border-4 border-pink-300 object-cover mb-6"
        />

        {/* Name and Role */}
        <h1 className="text-3xl font-bold text-purple-700 mb-2">Aisha Khan</h1>
        <p className="text-gray-600 text-lg mb-4">UI/UX Designer 💖</p>

        {/* Bio */}
        <p className="text-gray-500 leading-relaxed max-w-lg mx-auto mb-8">
          Aisha is a passionate designer who loves creating clean, delightful,
          and user-centered interfaces. She focuses on improving user journeys
          with simplicity and creativity. 🌸
        </p>

        {/* Skills */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {["Figma", "Adobe XD", "Wireframing", "Prototyping", "Design Systems"].map(
            (skill, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-pink-400 hover:text-pink-600 transition-all"
          >
            <FaInstagram size={26} />
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition-all"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-700 transition-all"
          >
            <FaDribbble size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AishaKhan;
