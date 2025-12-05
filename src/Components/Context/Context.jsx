import { createContext, useState } from "react"

export const ContextData = createContext()

export const ContextProvider = ({children}) => {

    const [countValue, setCountValue] = useState(0)
    const name = "Tehseen Fatima"

    return (
        <ContextData.Provider value={{ countValue, setCountValue, name }}>
            {children}
        </ContextData.Provider>
    )

}