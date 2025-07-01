import Products from "../components/Productos/Products";
import Bebida from '/public/img/Bebida.jpg'

function Catalogo () {

  return (
      <div>
        <h5>Cátalogo de productos.</h5>
        <div className="product-card-container">
          <img src={Bebida} className="Bebida" alt="Bebida Energetica" />
        <Products></Products>
        </div>
      </div>
  );
}

export default Catalogo;
