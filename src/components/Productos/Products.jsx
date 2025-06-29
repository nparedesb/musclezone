import { useState, useEffect } from "react"

const Products = () =>  {
    const [products, setProducts ] = useState([]) 

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])

return products.map((product) => {
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="Lista de Productos" />
                <h6 className="name">{product.name}</h6>
                <h6 className="price">{product.price}</h6>
            <button>Comprar</button>
        </div>
    )
}
)
 
}

export default Products