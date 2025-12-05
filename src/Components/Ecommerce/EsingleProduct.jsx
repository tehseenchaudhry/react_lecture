import React, { useEffect, useState } from "react";
import { Star, Plus, Minus } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addProduct, decreaseQty, increaseQty } from "../../redux/Features/CartSlice"

const ESingleProduct = () => {

  const location = useLocation()

  const dispatch = useDispatch()


  const product = location?.state.product

  const cartItems = useSelector((store) => store.Cart)

  const item = cartItems.find((item) => item.id === product?.id)
  const [productProfile, setProductProfile] = useState(null)

  useEffect(() => {

    if (!item) {

      setProductProfile(product)

    }
    else {
      setProductProfile(item)

    }


  }, [product, item])



  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* ----------------- LEFT SIDE: IMAGE ----------------- */}
        <div className="bg-gray-100 w-full rounded-2xl p-6 shadow-md">
          <img
            src={productProfile?.image}
            alt={productProfile?.name}
            className="w-full h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* ----------------- RIGHT SIDE: DETAILS ----------------- */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3">{productProfile?.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <Star className="text-yellow-500" />
            <p className="ml-2 text-gray-600">{productProfile?.rating} / 5</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-5">{productProfile?.desc}</p>

          {/* Price */}
          <p className="text-3xl font-semibold text-blue-600 mb-5">
            ${productProfile?.price}
          </p>

          

          {/* Add to Cart Button */}
          <button

            onClick={() => dispatch(addProduct(product))}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            Add to Cart
          </button>

          {/* Stock */}
          <p className="mt-3 text-gray-500">Available Stock: {productProfile?.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ESingleProduct;
