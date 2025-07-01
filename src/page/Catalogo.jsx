import Products from "../components/Productos/Products";


function Catalogo () {

  return (
      <div>
        <h5>Cátalogo de productos.</h5>
        <div className="product-card-container">
        <Products></Products>
        </div>
      </div>
  );
}

export default Catalogo;
