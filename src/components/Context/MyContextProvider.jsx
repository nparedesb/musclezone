import { MyContext } from "../Context/MyContext";
import React, { useState } from 'react';
    
const MyContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const buyProducts = (product) => {

        const productrepeat = cart.find((item) => item.id === product.id )
        
        if(productrepeat){
           setCart(cart.map((item)  =>  (item.id === product.id ? {...product, quanty: productrepeat.quanty + 1 }   : item  ) ) )
        }else{
            setCart([...cart, product ])
        }

    }

    return (
        <MyContext.Provider value={{cart, setCart, buyProducts}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider