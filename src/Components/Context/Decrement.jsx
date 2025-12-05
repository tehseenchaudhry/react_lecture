import React, { useContext } from 'react'
import { ContextData } from './Context'

const Decrement = () => {
  const {countValue, setCountValue} = useContext(ContextData)
  return (
    <div>
        <button onClick={()=> setCountValue(countValue-1)} className='px-6 py-2 bg-amber-700 text-white rounded cursor-pointer'>Decrement</button>
    </div>
  )
}

export default Decrement
