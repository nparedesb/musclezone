import Products from "../components/Productos/Products";
// import Agua from 'src/assets/Agua.jpg'

function Catalogo () {

  return (
      <div>
        <h5>Cátalogo de productos.</h5>
        <div className="product-card-container">
          {/* <img src={Agua} className="Agua" alt="Agua" /> */}
        <Products></Products>
        </div>
      </div>
  );
}

export default Catalogo;
