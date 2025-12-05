import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "../Features/CounterSlice"
import CartSlice from "../Features/CartSlice"
import WeatherApiSlice from "../Features/WeatherSlice"


export const Store = configureStore({
    reducer: {
        Count: CounterSlice,
        Cart: CartSlice,
        [WeatherApiSlice. reducerPath]: WeatherApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        //concat = middleware list ke end me Weather API wala middleware add kar do
        getDefaultMiddleware().concat([WeatherApiSlice.middleware])
})
