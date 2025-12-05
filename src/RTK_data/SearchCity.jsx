import React from 'react'
import { useSearchCityMutation } from '../redux/Features/WeatherSlice'

const SearchCity = () => {

    const [searchCity, { data, isLoading, error }] = useSearchCityMutation();

    // console.log(searchCity);
    
    // console.log(data);

    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleClick = async () => {
        const data = await searchCity("lodhran")

        // console.log(data);

    }
    console.log(isLoading);
    


    return (
        <div>
            <button onClick={handleClick} className='px-5 py-2 bg-black text-white rounded'>CLick Here</button>
        </div>
    )
}

export default SearchCity