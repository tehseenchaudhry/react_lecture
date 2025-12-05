import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const WeatherApiSlice = createApi({
    reducerPath: "Weather",
    baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1" }),
    endpoints: (builder) => ({

        searchCity: builder.mutation({

            query: (cityName) => `/current.json?key=5c45b3c97b6f4e7885d94228252011&q=${cityName}&aqi=yes`

        })

    })
})


export const { useSearchCityMutation } = WeatherApiSlice
export default WeatherApiSlice