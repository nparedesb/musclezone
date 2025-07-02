import CartEmpty from "../components/CartContent/CartEmpty";

function Carrito () {
	
	return (
		<>
		  <h5>Carrito de compras</h5>
		  <div className="product-card-container">
			<CartEmpty></CartEmpty>
		  </div>
		</>
	)
  }
	
export default Carrito;
