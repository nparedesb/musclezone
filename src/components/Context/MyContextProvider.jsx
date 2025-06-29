import { MyContext } from './MyContext';
import React, { useState } from 'react';
    
const MyContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    return (
        <MyContext.Provider value={{cart, setCart}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider