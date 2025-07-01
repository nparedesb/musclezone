/* import CartElement from "../components/CartContent/CartElement"
import CartTotal from "../components/CartContent/CartTotal" */
import CartEmpty from "../components/CartContent/CartEmpty";

function Carrito () {
	
	return (
		<>
		  <h5>Carrito de compras</h5>
		  <div className="product-card-container">
			<CartEmpty></CartEmpty>
		  {/* <CartElement></CartElement>
		  <CartTotal></CartTotal> */}
		  </div>
		</>
	)
  }
	
export default Carrito;
