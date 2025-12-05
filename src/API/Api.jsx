import axios from "axios"

export const Api =async ()=>{

const response =await axios.post(`http://api.weatherapi.com/v1/current.json?key=5c45b3c97b6f4e7885d94228252011&q=Bahawalpur&aqi=yes`)
console.log(response);
return response?.data

}