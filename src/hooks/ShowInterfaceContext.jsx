import React from 'react';
import { useState, createContext } from 'react';


export const ShowInterfaceContext = createContext();
export const ShowInterfaceContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)

    function handleAuthentication() {
        setIsVisible(prevState => !prevState);
    }

    return (
        <ShowInterfaceContext.Provider value={{isVisible, handleAuthentication}}>
            {children}
        </ShowInterfaceContext.Provider>
    )
}
