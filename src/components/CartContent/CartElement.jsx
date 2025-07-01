import { useContext } from "react"
import { MyContext } from "../Context/MyContext"

const CartElement = () => {
    const {cart} = useContext(MyContext)

    return cart.map((product) => {
        return (
            <div className="product-card-container" key={product.id}>
                <img src={product.img} alt='product-card'></img>
                <div className="space"> | |</div>
                <p className="name">   {product.name} </p>
                <div className="space"> | |</div>
                <p className="price"> ${product.price}.00</p>
            </div>
        )
    })
}

export default CartElement