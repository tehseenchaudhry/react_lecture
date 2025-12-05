import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count, setCount] = useState(0)
 

    useEffect(()=>{

        console.log("Mounted",count);

        return()=>{
            console.log("Unmounted",count);
            
        }
        

    },[count])

    // console.log("Hello from Count");

    // console.log("Welcome to Codes thinker");

    // console.log("Technology");


    return (
        <div className='flex justify-center mt-12 gap-4 items-center'>
            <button disabled={count == -10} onClick={() => setCount(count - 1)} className='px-6 py-2 bg-blue-500 text-white cursor-pointer rounded'>Decrement</button>

            <h1 className='text-4xl font-semibold text-orange-500'>{count}</h1>

            <button disabled={count == 10} onClick={() => setCount(count + 1)} className='px-6 py-2 bg-blue-500 text-white cursor-pointer rounded'>Increment</button>
        </div>
    )
}

export default UseEffectHook