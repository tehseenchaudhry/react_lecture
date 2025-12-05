import React, { useState } from 'react'

const UseStateHook = () => {

  const [count, setCount] = useState(0)

  // const handleDec = () => {

  //     // console.log("Helo from Dec");

  //     // setCount("Tahreem")
  //     // setCount("Tahseem")

  //     if (count > -10) {
  //         setCount(count - 1)
  //     } else {
  //         setCount(0)
  //     }
  // }

  // const handleInc = () => {
  //     if (count < 10) {
  //         setCount(count + 1)
  //     } else {
  //         setCount(0)
  //     }




  // }


  const handleCount = (parame) => {
    if (parame === "inc" && count < 10) {
      setCount(count + 1);
    } else if (parame === "dec" && count > -10) {
      setCount(count - 1);
    }
  };





  return (
    // <div className='flex justify-center items-center mt-5 gap-3'>
    //     <button disabled={count == -10} onClick={() => setCount(count - 1)} className={count >= -9 ? 'px-6 py-2 bg-black text-white rounded cursor-pointer': 'px-6 py-2 bg-black text-white rounded cursor-not-allowed'}>Decrement</button>
    //     <h1 className='text-4xl font-semibold '>{count}</h1>
    //     <button disabled={count == 10} onClick={() => setCount(count + 1)} className={count <= 9 ? 'px-6 py-2 bg-black text-white rounded cursor-pointer' : 'px-6 py-2 bg-black text-white rounded cursor-not-allowed'}>Increment</button>
    // </div>

    <div className='text-center mt-5 spacex-3'>
      <h1>Count: {count}</h1>
      <button onClick={() => handleCount("inc")} className='border-2 border-blue-600 bg-blue-300 px-3 py-1 rounded-sm'>Increase</button>
      <button onClick={() => handleCount("dec")} className='border-2 border-blue-600 bg-blue-300 px-3 py-1 rounded-sm'>Decrease</button>
    </div>
  )
}

export default UseStateHook