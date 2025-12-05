import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = ({ Component }) => {
const navigate = useNavigate()
    const login = localStorage.getItem("login")
    

    console.log(login);


    // useEffect(() => {
    //     if (!login) {

    //         navigate("/contact")

    //     }

    // }, [])


    if (!login) {
        navigate("/contact")
    }
    else {
        return <Component />
    } 
}

export default Protected