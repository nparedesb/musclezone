import { useState, useEffect } from "react"

const Search = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    const showData = async() => {
        const response = await fetch("data.json")
        const products = await response.json()

        setProducts(products)
    }
    
   const searcher  = (e) => {
    setSearch(e.target.value) 
   }

   let results = []
   if(!search)
   {
        results = products
   }else{
        results = products.filter((products) =>
            products.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    }

    useEffect( () => {
        showData()
    }, [])

    return (
        <div>
            <input value={search} onChange={searcher} type="text" placeholder="Busqueda" className="form-control"></input>

            <table className="table table-striped table-hover mt-5 shadow-lg">
            <thead>
                <tr className="busqueda-products text-white">
                    <th>Nombre</th>
                    <th>Precio</th>                    
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {results.map(( products ) => (
                    <tr key={products.id}>
                        <td>{products.name}</td>
                        <td>{products.price}</td>      
                        <td>{products.quanty}</td>                        
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}  
  export default Search