import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import { decreaseQty, removeProduct, increaseQty } from "../../redux/Features/CartSlice";

const BillItem = () => {

    const cartItem = useSelector((store) => store.Cart)
    const dispatch = useDispatch();

    // console.log("Bill items", cartItem);

    const sum = cartItem.reduce((acc, curr) => {

        return acc += curr.qty * curr.price

    }, 0)

    return (
        <div className="absolute z-10 w-[90%] left-[5%] bg-black flex flex-col items-center p-5 rounded mt-4">

            {cartItem.length == 0 ?

                (
                    <p className="text-white text-2xl">No item Selected</p>
                )
                :


                cartItem?.map((product) => {

                    return (
                        <div className="flex w-[90%] items-center bg-white shadow-md rounded-xl p-4 mb-3 transition-transform">

                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-20 h-20 object-cover rounded-lg mr-4"
                            />

                            {/* Product Info */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600 text-sm">${product.price}</p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mr-4">
                                <button onClick={() => dispatch(decreaseQty(product))}
                                    className="w-8 h-8 bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-200"
                                >
                                    <Minus size={18} />
                                </button>

                                <span classclass="font-semibold text-lg">{product.qty}</span>

                                <button onClick={() => dispatch(increaseQty(product))}
                                    className="w-8 h-8 bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-200"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>

                            {/* Delete Button */}
                            <button onClick={() => dispatch(removeProduct(product))}
                                className="text-red-500 hover:text-red-600 transition-transform hover:scale-110"
                            >
                                <Trash2 size={22} />
                            </button>
                        </div>
                    )


                })}

            <h1 className="text-2xl text-white">Sub Total = {sum}</h1>
            <h1 className="text-2xl text-white">Shipping = 20</h1>
            <h1 className="text-2xl text-white">Grand Total = {sum + 20}</h1>

        </div>
    );
};

export default BillItem;
