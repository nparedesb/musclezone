import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";

import CartElement from "./CartElement";
import CartTotal from "./CartTotal";

// import '/css/CartContent.css'

const CartEmpty = () => {
    const {cart} = useContext(MyContext)
    return (
        <>
        {cart.length > 0 ? (
            <>
            <CartElement></CartElement>
            <CartTotal></CartTotal>
            </>
        ) : (
            <h5 className="cart-message-center">El carrito esta vacio.</h5>
        )}
        </>
    )
}

export default CartEmpty