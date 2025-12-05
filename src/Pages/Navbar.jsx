import React, { useState } from 'react'
import "./navbar.css"
import { AiOutlineBars } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = ({ name, age }) => {

    // console.log(para);

    // const  {name, age} = para    

    const [icon, setIcon] = useState(true)
    const [underLine, setUnderLine] = useState("product")

    return (
        <div>
            <nav className='flex bg-black text-white justify-around items-center h-[80px] mt-4'>
                <h1 className='text-3xl font-semibold text-orange-400'>BrandName</h1>
                <ul className={icon === true ? "hideNav" : "showNav" }>
                 <Link to="/"> <li onClick={()=>setUnderLine("home")} className={underLine === "home" ? 'bg-blue-400 px-6 py-2 transition-all duration-300 rounded': 'hover:bg-blue-400 px-6 py-2 transition-all duration-300 rounded'}>Home</li></Link>
                  <Link to="/about">  <li onClick={()=>setUnderLine("about")} className={underLine === "about" ? 'bg-blue-400 px-6 py-2 transition-all duration-300 rounded' : 'hover:bg-blue-400 px-6 py-2 transition-all duration-300 rounded'}>About</li></Link>
                   <Link to="/products"> <li onClick={()=>setUnderLine("product")} className={underLine === "product" ? 'bg-blue-400 px-6 py-2 transition-all duration-300 rounded' : 'hover:bg-blue-400 px-6 py-2 transition-all duration-300 rounded'}>Product</li></Link>
                   <Link to="/team"> <li className='hover:bg-blue-400 px-6 py-2 transition-all duration-300 rounded'>Team</li></Link>
                    <li className='hover:bg-blue-400 px-6 py-2 transition-all duration-300 rounded'>Services</li>
                  <Link to="/contact"><li className='hover:bg-blue-400 px-6 py-2 transition-all duration-300 rounded'>Contact</li></Link>
                </ul>
                <button className='bg-orange-500 text-white px-6 py-2 rounded'>Get Started</button>

                <div className='icons'>
                    {icon === true ?
                        <AiOutlineBars onClick={()=>setIcon(!icon)} className= 'text-3xl cursor-pointer' /> :
                        <RxCross1 onClick={()=>setIcon(!icon)} className='text-black text-3xl cursor-pointer' />
                    }
                </div>
            </nav>


           {/* {
            underLine === "home" ?

             <div className='flex flex-col items-center justify-center gap-5 h-[40vh] w-[80%] bg-black my-12 mx-auto rounded-2xl text-white'>
                    <h1 className='w-[85%] text-3xl font-semibold text-orange-500'>Hello from Home</h1>
                    <p className='w-[85%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam beatae odio, iure perferendis ipsam voluptatem consequatur modi blanditiis est unde ad, excepturi, ipsa obcaecati quos fugit! Ipsam itaque quaerat est.</p>

                    <button className='me-auto ms-18 px-6 py-2 bg-blue-500 rounded'>Click Here</button>
            </div> : underLine === "about" ? 
             <div className='flex flex-col items-center justify-center gap-5 h-[40vh] w-[80%] bg-black my-12 mx-auto rounded-2xl text-white'>
                    <h1 className='w-[85%] text-3xl font-semibold text-lime-500'>Hello from About</h1>
                    <p className='w-[85%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam beatae odio, iure perferendis ipsam voluptatem consequatur modi blanditiis est unde ad, excepturi, ipsa obcaecati quos fugit! Ipsam itaque quaerat est.</p>

                    <button className='me-auto ms-18 px-6 py-2 bg-blue-500 rounded'>Click Here</button>
            </div> : underLine === "product" ? 
             <div className='flex flex-col items-center justify-center gap-5 h-[40vh] w-[80%] bg-black my-12 mx-auto rounded-2xl text-white'>
                    <h1 className='w-[85%] text-3xl font-semibold text-purple-00'>Hello from Product</h1>
                    <p className='w-[85%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam beatae odio, iure perferendis ipsam voluptatem consequatur modi blanditiis est unde ad, excepturi, ipsa obcaecati quos fugit! Ipsam itaque quaerat est.</p>

                    <button className='me-auto ms-18 px-6 py-2 bg-blue-500 rounded'>Click Here</button>
            </div> : ""

           } */}



        </div>
    )
}

export default Navbar