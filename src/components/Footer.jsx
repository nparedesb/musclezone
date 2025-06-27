export const Footer = ()  =>  {
    return (
    <footer>
        <div class="footer-column">
            <h6>Contacto:</h6>
                <ul>
                    <li>Email: musclezone@gmail.com</li>
                    <li>Teléfono: +52 5773 20 51</li>
                    <li>Dirección: Iztacalco, Ciudad de México.</li>
                </ul>
        </div>
        <div class="footer-column">
            <h6>Enlaces:</h6>
            <BrowserRouter>
            <nav>
              <ul>
              <li><NavLink to="/Home">Inicio</NavLink></li>
              <li><NavLink to="/Valores">Nuestros Valores</NavLink></li>
                  <li><a href="/Servicios">Nuestros Servicios</a></li>
                  <li><a href="/Productos">Nuestros Productos</a></li>
                  <li><a href="/Carrito">Carrito de compras</a></li>
              </ul>
            </nav>
            </BrowserRouter>
        </div>
        <div class="footer-column">
            <h6>Siguenos:</h6>
                <ul class="footer-icons">
                  <li><a href="https://www.facebook.com/muscleZone" target="_blank" >Facebook</a></li>
                  <li><a href="https://www.instagram.com/musclezone" target="_blank" >Instagram</a></li>
                  <li><a href="https://www.youtube.com/musclezone" target="_blank" >YouTube</a></li>
                </ul>
        </div>
    </footer>
    );
}
