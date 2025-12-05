import React, { useState } from 'react'

const DarkTheme = () => {

    const [color, setColor] = useState(true)

  return (
    <div className='flex justify-center gap-4 my-12 items-center'>
        <div className={color === true ? 'w-[200px] h-[200px] bg-blue-400 transition-all duration-300' : 'w-[200px] h-[200px] bg-purple-500 transition-all duration-300'}></div>

        <button onClick={()=>setColor(!color)} className='px-6 py-2 bg-fuchsia-400 text-white rounded'>Click Here</button>
    </div>
  )
}

export default DarkTheme