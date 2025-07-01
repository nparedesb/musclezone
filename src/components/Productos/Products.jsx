import { useContext, useState, useEffect } from "react"
import { MyContext } from "../Context/MyContext"

const Products = () =>  {
    const [products, setProducts ] = useState([]) 
    const {cart, setCart} = useContext(MyContext)

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])

    const buyProducts = (product) => {
        setCart([...cart, product ])

    }

    return products.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt="Lista de Productos" />
                <h6 className="name">{product.name}</h6>
                <h6 className="price">${product.price}.00</h6>
            <button onClick={() => buyProducts(product)}>Comprar</button>
        </div>
        )
    }
  )
}

export default Products