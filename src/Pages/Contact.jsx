import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate()

  const handleLogin = () => {

    localStorage.setItem("login", true)
    navigate("/")
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 flex items-center justify-center py-16 px-6">
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-700 mb-2">Contact Us </h1>
          <p className="text-gray-600">
            We'd love to hear from you! Send us a message and we’ll get back soon 💫
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-purple-600 text-xl" />
              <p>123 Creative Street, Lahore, Pakistan</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-purple-600 text-xl" />
              <p>contact@fatimachaudhry.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-purple-600 text-xl" />
              <p>+92 300 1234567</p>
            </div>

            <div className="mt-6 bg-purple-50 rounded-xl p-4 text-sm text-purple-700">
              <p>
                <span className="font-semibold">Office Hours:</span> <br />
                Monday – Friday: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-left text-gray-700 mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 mb-1 font-medium">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              onClick={handleLogin}
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
            >
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
