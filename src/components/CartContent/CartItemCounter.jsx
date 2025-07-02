import { useContext } from "react"
import { MyContext } from "../Context/MyContext"

const CartItemCounter = ({product}) => {
    const {cart, setCart, buyProducts} = useContext(MyContext)
    
    const decrese = () => {
        const productrepeat = cart.find((item) => item.id === product.id )
        
        productrepeat.quanty !== 1 &&
        setCart(cart.map((item)  =>  (item.id === product.id ? {...product, quanty: productrepeat.quanty - 1 }   : item  ) ) )
        
    }
    
    return (
        <>
            <p className="counter-button" onClick={decrese}> 
                ➖ 
            </p>
            <p> {product.quanty} </p>
            <p className="cart-delete-product" onClick={() => buyProducts(product)}>
                ➕
            </p>
        </>
    )
} 

export default CartItemCounter