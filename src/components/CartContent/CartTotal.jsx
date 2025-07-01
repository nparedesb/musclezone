import { useContext } from "react"
import { MyContext } from "../Context/MyContext"

const CartTotal = () => {
    const {cart} = useContext(MyContext)
    
    const total = cart.reduce((acc, elem) => acc + elem.price * elem.quanty, 0 )
return(
    <>
    <h5 className="cartTotal">Total a pagar: ${total}.00 </h5>
        
    </>
    )
}

export default CartTotal