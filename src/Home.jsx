function Home () {

  return (
    <div>
      <header>
        <h1 className="titulo">Muscle Zone</h1>
    </header>
    
      <div>
        <h5>Nuestros Valores.</h5>
        <section class="valores">
          <ul>
            <li><a href="/Valores#mision">Misión.</a></li>
            <li><a href="/Valores#vision">Visión.</a></li>  
            <li><a href="/Valores#somos">¿Quiénes somos?</a></li>                      
            <li><a href="/Valores#contacto">Contacto.</a></li>                      
          </ul>
        </section>
        
        <h5>Nuestros Servicios.</h5>
        <section class="pesas">
          <h6>Área de Pesas.</h6>
          <ul>
            <li><a href="/Servicios">Área de tren superior.</a></li>
            <li><a href="/Servicios">Área de tren inferior.</a></li>
          </ul>
        </section>
        <section class="cardio">
          <h6>Área de cardio.</h6>
          <ul>
            <li><a href="/Servicios">Entrenamiento funcional.</a></li>
            <li><a href="/Servicios">Entrenamiento con máquina.</a></li>
          </ul>
        </section>

        <h5>Nuestros Productos.</h5>
        <section class="suplementos">
          <h6>Venta de Suplementos.</h6>
          <ul>
            <li><a href="/Productos">Proteinas.</a></li>
            <li><a href="/Productos">Creatinas.</a></li>
            <li><a href="/Productos">Vitaminas.</a></li>
          </ul>
        </section>
        <section class="entrenamiento">
          <h6>Planeas de Entrenamiento.</h6>
          <ul>
           <li><a href="/Productos">Rutina Pierna.</a></li>
           <li><a href="/Productos">Rutina Tren Superior.</a></li>
           <li><a href="/Productos">Rutina Cardiovascular.</a></li>
          </ul>
        </section>
        <section class="membresias">
          <h6>Tipos de membresias.</h6>
          <ul>
           <li><a href="/Productos">Membresia Oro.</a></li>
           <li><a href="/Productos">Membresia Plata.</a></li>
           <li><a href="/Productos">Membresia Bronce.</a></li>
          </ul>
        </section>

        <h5>Carrito de compras.</h5>
        <section>
          <ul>
           <li><a href="/Carrito">Carrito de compra.</a></li>
          </ul>
        </section>
    </div>
  </div>
  );
}

export default Home;
