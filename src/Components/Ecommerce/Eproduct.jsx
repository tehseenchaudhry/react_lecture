import React, { useRef, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/Features/CartSlice"
import { useNavigate } from "react-router-dom";



const products = [
    // MEN (1-13)
    { id: 1, name: "Running Shoes", price: 79, qty: 1, stock: 10, category: "Men", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, name: "Smart Watch", price: 99, qty: 1, stock: 15, category: "Men", image: "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, name: "Leather Wallet", price: 45, qty: 1, stock: 20, category: "Men", image: "https://images.pexels.com/photos/210394/pexels-photo-210394.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, name: "Casual Shirt", price: 60, qty: 1, stock: 18, category: "Men", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, name: "Jeans", price: 70, qty: 1, stock: 12, category: "Men", image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 6, name: "Formal Shoes", price: 85, qty: 1, stock: 14, category: "Men", image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 7, name: "Sports Cap", price: 25, qty: 1, stock: 30, category: "Men", image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 8, name: "Backpack", price: 70, qty: 1, stock: 8, category: "Men", image: "https://images.pexels.com/photos/414517/pexels-photo-414517.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 9, name: "Hoodie", price: 50, qty: 1, stock: 20, category: "Men", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 10, name: "Socks Pack", price: 15, qty: 1, stock: 50, category: "Men", image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" },
    { id: 11, name: "Belt", price: 30, qty: 1, stock: 25, category: "Men", image: "https://images.pexels.com/photos/210394/pexels-photo-210394.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 12, name: "Sunglasses", price: 45, qty: 1, stock: 20, category: "Men", image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 13, name: "Casual T-Shirt", price: 35, qty: 1, stock: 25, category: "Men", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400" },

    // WOMEN (14-25)
    { id: 14, name: "Handbag", price: 120, qty: 1, stock: 8, category: "Women", image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 15, name: "High Heels", price: 99, qty: 1, stock: 15, category: "Women", image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" },
    { id: 16, name: "Casual Dress", price: 80, qty: 1, stock: 10, category: "Women", image: "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 17, name: "Watch", price: 110, qty: 1, stock: 12, category: "Women", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 18, name: "Sunglasses", price: 55, qty: 1, stock: 18, category: "Women", image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 19, name: "Flats Shoes", price: 75, qty: 1, stock: 20, category: "Women", image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" },
    { id: 20, name: "Skirt", price: 65, qty: 1, stock: 12, category: "Women", image: "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 21, name: "Blouse", price: 55, qty: 1, stock: 18, category: "Women", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 22, name: "Necklace", price: 45, qty: 1, stock: 15, category: "Women", image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 23, name: "Earrings", price: 35, qty: 1, stock: 25, category: "Women", image: "https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 24, name: "Bracelet", price: 40, qty: 1, stock: 20, category: "Women", image: "https://images.pexels.com/photos/1382733/pexels-photo-1382733.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 25, name: "Wallet", price: 50, qty: 1, stock: 15, category: "Women", image: "https://images.pexels.com/photos/210394/pexels-photo-210394.jpeg?auto=compress&cs=tinysrgb&w=400" },

    // KIDS (26-37)
    { id: 26, name: "Kids T-Shirt", price: 25, qty: 1, stock: 30, category: "Kids", image: "https://images.pexels.com/photos/207413/pexels-photo-207413.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 27, name: "Kids Shorts", price: 20, qty: 1, stock: 25, category: "Kids", image: "https://images.pexels.com/photos/207414/pexels-photo-207414.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 28, name: "Kids Sneakers", price: 35, qty: 1, stock: 18, category: "Kids", image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 29, name: "Kids Cap", price: 15, qty: 1, stock: 35, category: "Kids", image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 30, name: "Kids Backpack", price: 30, qty: 1, stock: 20, category: "Kids", image: "https://images.pexels.com/photos/414517/pexels-photo-414517.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 31, name: "Kids Hoodie", price: 40, qty: 1, stock: 25, category: "Kids", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 32, name: "Kids Shoes", price: 35, qty: 1, stock: 18, category: "Kids", image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 33, name: "Kids Dress", price: 30, qty: 1, stock: 15, category: "Kids", image: "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 34, name: "Kids Socks Pack", price: 10, qty: 1, stock: 40, category: "Kids", image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" },
    { id: 35, name: "Kids Sunglasses", price: 15, qty: 1, stock: 20, category: "Kids", image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 36, name: "Kids Cap Set", price: 18, qty: 1, stock: 25, category: "Kids", image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 37, name: "Kids Pajama", price: 22, qty: 1, stock: 30, category: "Kids", image: "https://images.pexels.com/photos/207413/pexels-photo-207413.jpeg?auto=compress&cs=tinysrgb&w=400" },

    // TOYS (38-50)
    { id: 38, name: "Teddy Bear", price: 25, qty: 1, stock: 50, category: "Toys", image: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 39, name: "Toy Car", price: 20, qty: 1, stock: 40, category: "Toys", image: "https://images.pexels.com/photos/163403/toy-car-toy-toy-truck-toys-163403.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 40, name: "Action Figure", price: 30, qty: 1, stock: 25, category: "Toys", image: "https://images.pexels.com/photos/208967/pexels-photo-208967.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 41, name: "Puzzle Game", price: 18, qty: 1, stock: 30, category: "Toys", image: "https://images.pexels.com/photos/163077/puzzle-game-toy-board-game-163077.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 42, name: "Toy Train", price: 22, qty: 1, stock: 20, category: "Toys", image: "https://images.pexels.com/photos/257359/pexels-photo-257359.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 43, name: "Board Game", price: 35, qty: 1, stock: 15, category: "Toys", image: "https://images.pexels.com/photos/163077/puzzle-game-toy-board-game-163077.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 44, name: "Stuffed Animal", price: 28, qty: 1, stock: 20, category: "Toys", image: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 45, name: "Building Blocks", price: 30, qty: 1, stock: 35, category: "Toys", image: "https://images.pexels.com/photos/163403/toy-car-toy-toy-truck-toys-163403.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 46, name: "Toy Robot", price: 40, qty: 1, stock: 20, category: "Toys", image: "https://images.pexels.com/photos/208967/pexels-photo-208967.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 47, name: "Toy Plane", price: 35, qty: 1, stock: 25, category: "Toys", image: "https://images.pexels.com/photos/257359/pexels-photo-257359.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 48, name: "Mini Puzzle", price: 20, qty: 1, stock: 30, category: "Toys", image: "https://images.pexels.com/photos/163077/puzzle-game-toy-board-game-163077.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 49, name: "Toy Boat", price: 22, qty: 1, stock: 18, category: "Toys", image: "https://images.pexels.com/photos/257359/pexels-photo-257359.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 50, name: "Stuffed Bunny", price: 28, qty: 1, stock: 20, category: "Toys", image: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=400" }
];


const EProductPage = () => {

    // const dispatch = useDispatch()
    const observer = useRef()
    const navigate = useNavigate()

    const [productArray, setProductArray] = useState(products)

    const handleOption = () => {

        const category = observer.current.value

        const categoryArray = products.filter((item) => {

            return item.category === category

        })

        // console.log(categoryArray);


        setProductArray(categoryArray);

    }


    const handleSerach = (e) => {

        // console.log(e.target.value);

        const value = e.target.value.toLowerCase()

        const SearchProduct = products.filter((item) => {

            return item.name.toLowerCase().includes(value)

        })
        console.log(SearchProduct);

        setProductArray(SearchProduct)


    }


    const handleRoute = (product) => {

        navigate(`/eproduct/${product.id}`, { state: { product } })

    }


    return (
        <div className="min-h-screen bg-gray-100 py-10">

            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h2>

            <select ref={observer} name="" id="" className="border px-2 py-1 w-[10%] mb-12 ms-5">

                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
                <option value="Toys">Toys</option>

            </select>


            <button onClick={handleOption} className="px-6 py-2 bg-black text-white rounded mx-5">Click Here</button> 

            <input onKeyUp={handleSerach} type="text" name="" id="" className="border w-[50%] p-3" placeholder="Search Product" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {productArray.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover"
                            />
                            {product.stock === 0 && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    Out of Stock
                                </span>
                            )}
                        </div>
                        <div className="p-4 flex flex-col justify-between h-44">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 mt-1">${product.price}</p>
                            <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
                            <div className="mt-3 flex justify-between items-center">
                                <button
                                    // onClick={() => dispatch(addProduct(product))}
                                    onClick={() => handleRoute(product)}
                                    className="cursor-pointer bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 flex items-center gap-1">
                                    <FaShoppingCart /> Add
                                </button>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EProductPage;
