import React, { useRef, useState } from 'react'

const UseRef = () => {

const observer = useRef()
const [value, setValue] = useState("Welcome")

const handleClick = ()=>{

  // console.log(observer.current);

  observer.current.style.border = "2px solid red"
  observer.current.style.backgroundColor = "black"
  observer.current.style.color = "white"

  const inputValue = observer.current.value

  console.log(inputValue);

  setValue(inputValue)
  

}

  return (
    <div>

      <input ref={observer} type="text" name="" className='border w-[400px] p-2 m-12 rounded' id="" placeholder='Enter Your Name'/>

      <button onClick={handleClick} className='px-6 py-2 bg-amber-700 text-white rounded'>Click Here</button>

      <h1 className='text-3xl font-semibold text-blue-500'>{value}</h1>
    </div>
  )
}

export default UseRef