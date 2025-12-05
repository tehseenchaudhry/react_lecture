import React from "react";
import { useParams } from "react-router-dom";

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

const SingleProduct = () => {

    const param = useParams()

    //    console.log(param.id);

    const product = productList.find((item, index) => {
        return item.id == param.id
    })

    console.log(product);



    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Product Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Product Image */}
                <img
                      src={product.image}
                      alt={product.name}
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
                    <p className="text-lg text-gray-500 mb-4">Category: Premium Collection</p>
                    <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        Experience the perfect combination of comfort and style with our {product.name}.
                        Made from high-quality materials to ensure durability and designed to make you stand out.
                    </p>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;
