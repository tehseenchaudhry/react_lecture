import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const productList = [
    { id: 1, name: "Running Shoes", price: "$79", image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg" },
    { id: 2, name: "Smart Watch", price: "$99", image: "https://images.pexels.com/photos/4498172/pexels-photo-4498172.jpeg" },
    { id: 3, name: "Leather Bag", price: "$120", image: "https://images.pexels.com/photos/16576419/pexels-photo-16576419.jpeg" },
    { id: 4, name: "Sunglasses", price: "$45", image: "https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg" },
    { id: 5, name: "Headphones", price: "$65", image: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg" },
    { id: 6, name: "Casual Shirt", price: "$39", image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg" },
    { id: 7, name: "Jeans", price: "$59", image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" },
    { id: 8, name: "Sports Jacket", price: "$89", image: "https://images.pexels.com/photos/3810895/pexels-photo-3810895.jpeg" },
    { id: 9, name: "Sneakers", price: "$99", image: "https://images.pexels.com/photos/2526879/pexels-photo-2526879.jpeg" },
    { id: 10, name: "Handbag", price: "$75", image: "https://images.pexels.com/photos/17053667/pexels-photo-17053667.jpeg" },
  ];


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Products</h1>
        <p className="text-gray-600">Explore our latest collection of stylish and affordable items.</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productList.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{product.price}</p>
              <Link to={`/products/${product.id}`}><button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </footer>
    </div>
  );
};

export default Products;

