import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Decrement , Increment , Reset} from "../redux/Features/CounterSlice"

const ReduxCounter = () => {

    const dispatch = useDispatch()

    const data = useSelector((store) => store.Count)

    console.log(data);


    return (
        <div className='flex justify-center mt-12 gap-4'>

            <button onClick={() => dispatch(Decrement("Welo jelo"))} className='px-6 py-2 bg-black text-white cursor-pointer rounded'>Decrement</button>
             
             
            <h1 className='text-4xl font-semibold'>{data}</h1>
            <button onClick={() => dispatch(Increment())} className='px-6 py-2 bg-black text-white cursor-pointer rounded'>Decrement</button>
             <button onClick={() => dispatch(Reset())} className='px-6 py-2 bg-black text-white cursor-pointer rounded'>Decrement</button>

        </div>
    )
}

export default ReduxCounter