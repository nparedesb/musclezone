import { useContext } from "react"
import { MyContext } from "../Context/MyContext"

const CartElement = () => {
    const {cart} = useContext(MyContext)

    return cart.map((product) => {
        return (
            <div className="product-card-container" key={product.id}>
                <img src={product.img} alt='product-card'></img>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        )
    })
}

export default CartElement