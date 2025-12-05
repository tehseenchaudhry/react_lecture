import React, { useEffect, useRef, useState } from 'react'
import { Api } from "./Api"

const WeatherApi = () => {

    const [weatherData, setWeatherData] = useState(null)
    // const [city, setCity] = useState(null)

    const inputData = useRef()

    useEffect(() => {

        Api()
        .then(data => setWeatherData(data))
        .catch((err) => {
            console.log("Error", err);

        })

    }, [])

    // const handleWeather = () => {
    //     const cityname = inputData.current.value
    //     setCity(cityname)
    // }


    return (
        <div>

            {/* <input ref={inputData} type="text" className='border' name="" id="" /> */}

            {/* <button onClick={handleWeather} className='px-6 py-2 bg-black text-white rounded cursor-pointer' >Search</button> */}

            <h1>Status : {weatherData?.current.condition.text}</h1>

            <img src={weatherData?.current.condition.icon} width="200px" height="200px" alt="" />

            <h1>Country : {weatherData?.location.country}</h1>
            <h1>Region : {weatherData?.location.region}</h1>
            <h1>City : {weatherData?.location.name}</h1>
            <h1>Time And Date : {weatherData?.location.localtime}</h1>
            <h1>Temp_C : {weatherData?.current.temp_c} c</h1>
            <h1>Temp_F : {weatherData?.current.temp_f} f</h1>
        </div>
    )
}

export default WeatherApi