import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Welcome to My Website</h2>
        <p className="text-gray-600 text-lg mb-6 max-w-xl">
          We help you create amazing web experiences with modern design and fast performance.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">Our Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-6 shadow-lg rounded-2xl hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Fast Performance</h4>
              <p className="text-gray-600">Experience lightning-fast websites optimized for speed and efficiency.</p>
            </div>

            <div className="p-6 shadow-lg rounded-2xl hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Modern Design</h4>
              <p className="text-gray-600">Clean, elegant, and responsive design for all your devices.</p>
            </div>

            <div className="p-6 shadow-lg rounded-2xl hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Easy Customization</h4>
              <p className="text-gray-600">Built with flexibility in mind so you can easily make it your own.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Home
