import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6">

      {/* About Section */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-gray-800">MyWebsite</span> — a place where creativity meets technology.
          We are passionate about building beautiful, responsive, and functional web applications 
          that make a difference.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our team focuses on simplicity, clean design, and user-friendly experiences. 
          We believe every project is unique, and we strive to turn your ideas into reality using 
          modern web technologies like React, Tailwind, and more.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md text-left">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To empower businesses and individuals by crafting digital experiences 
            that inspire and perform beautifully on every device.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </footer>
    </div>
  )
}

export default About
