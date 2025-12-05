import React, { useContext } from 'react'
import Decrement from './Decrement'
import Increment from './Increment'
import { ContextData } from "./Context"

const Counter = () => {

    const {countValue} = useContext(ContextData)

    // console.log("Value", data.name);




    return (
        <div className='flex justify-center mt-12 gap-3'>

            <Decrement />

            <h1 className='text-4xl font-semibold text-blue-400'>{countValue}</h1>

            <Increment />
       
        </div>
    )
}

export default Counter