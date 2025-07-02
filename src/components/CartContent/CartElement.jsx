import { useContext } from "react"
import { MyContext } from "../Context/MyContext"
import CartItemCounter from "./CartItemCounter"

const CartElement = () => {
    const {cart, setCart} = useContext(MyContext)

    const deleteProducts = (id) => {
        const foundId = cart.find((element) => element.id === id )

        const newCart = cart.filter((element) => {
            return element !== foundId
        })

        setCart(newCart)
    }

    return cart.map((product) => {
        return (
            <div className="product-card-container" key={product.id}>
                <img src={product.img} alt='product-card'></img>
                <div className="space"> | |</div>
                <p className="name">   {product.name} </p>
                <CartItemCounter product = {product} ></CartItemCounter>
                <div className="space"> | |</div>
                <p className="price"> ${product.price * product.quanty}.00</p>


                <p className="cart-delete-product" onClick={() => deleteProducts(product.id)}>
                {/* windows + . ==> Agrega un emojis*/}
                    ❌
                </p>
            </div>
        )
    })
}

export default CartElement