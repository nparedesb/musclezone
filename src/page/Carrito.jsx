import CartElement from "../components/CartContent/CartElement";
import CartTotal from "../components/CartContent/CartTotal"

function Carrito () {
	return (
		<div>
		  <h5>Carrito de compras</h5>
		  <div className="product-card-container">
		  <CartElement></CartElement>
		  <CartTotal></CartTotal>
		  </div>
		</div>
	);
  }
	
export default Carrito;
