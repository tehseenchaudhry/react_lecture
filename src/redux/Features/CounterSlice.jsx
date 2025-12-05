import { createSlice } from "@reduxjs/toolkit"

const CounterSlice = createSlice({

    initialState: 0,
    name: "Count",
    reducers: {

        Increment: (state, action) => {
             return state +=1
        },
        Decrement: (state, action) => {

            // console.log("Hello from Decrement", action.payload);

            return state -= 1

        },
        Reset: (state, action) => {
           return state = 0

        }

    }


})

export const { Decrement, Increment, Reset } = CounterSlice.actions

export default CounterSlice.reducer
