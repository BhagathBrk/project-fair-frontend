import React, { createContext, useState } from 'react'

export const tokenAuthContext = createContext()

const AuthContextAPI = ({ children }) => {
    const [isAuthorised, setIsAuthorised] = useState(false)

    // useEffect(() => {
    //     const token = sessionStorage.getItem('token')
    //     setIsAuthorised(!!token)
    // }, [])

    return (
        <tokenAuthContext.Provider value={{ isAuthorised, setIsAuthorised }}>
            {children}
        </tokenAuthContext.Provider>
    )
}

export default AuthContextAPI
