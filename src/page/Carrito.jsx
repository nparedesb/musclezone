import CartElement from "../components/CartContent/CartElement";

function Carrito () {
	return (
		<div>
		  <h5>Carrito de compras</h5>
		  <div className="product-card-container">
		  <CartElement></CartElement>
		  </div>
		</div>
	);
  }
	
export default Carrito;
