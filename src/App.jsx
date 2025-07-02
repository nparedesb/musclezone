/* Mis componentes de Estilo .css */
import './css/Products.css'
import './css/Pagina.css'
import './css/CartContent.css'

/* Mis componentes de Enrutamiento entre páginas */
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

/* Mis componentes de Páginas.jsx */
import Valores from "./page/Valores"
import Servicios from "./page/Servicios"
import Productos from "./page/Productos"
import Catalogo from "./page/Catalogo"
import Busqueda from './page/Busqueda'
import Carrito from "./page/Carrito"

/* Mi pie de página de mi sitio */
import { Footer } from './components/Footer'

/* El Hook que me ayuda a que los productos se deplieguen en el carrito de compras y en el catálogo de productos */
import MyContextProvider from './components/Context/MyContextProvider'

function App() {

  return (
    <div>
    <MyContextProvider>
      <div className='host'>
      <header>
        <h1 className="titulo">Muscle Zone</h1>
      </header>
    <>
    <BrowserRouter>
        <div>
      <nav>
        | |
        <NavLink className="menu" to="/Valores">
          Valores
        </NavLink>
        | |
        <NavLink className="menu" to="/Servicios">
          Servicios
        </NavLink>
        | |
        <NavLink className="menu" to="/Productos">
          Productos
        </NavLink>
        | |
        <NavLink className="menu" to="/Busqueda">
          Busqueda
        </NavLink>
        | |
        <NavLink className="menu" to="/Catalogo">
          Cátalogo    
        </NavLink>
        | |        
        <NavLink className="menu" to="/Carrito">
          🛒 Carrito de compras 
        </NavLink>
        | |
      </nav>    
        <main className="flex-grow flex-items-center justify-center">
        <Routes>
          <Route path="/Valores" element={<Valores/>}></Route>
          <Route path="/Servicios" element={<Servicios/>}></Route>
          <Route path="/Productos" element={<Productos/>}></Route>
          <Route path="/Busqueda" element={<Busqueda/>}></Route>
          <Route path="/Catalogo" element={<Catalogo/>}></Route>
          <Route path="/Carrito" element={<Carrito/>}></Route>
        </Routes>  
      </main>
        <Footer></Footer>
    </div>
      </BrowserRouter>
    </>
    <p className='Derechos'>© Copyright Muscle Zone</p>
    </div>
      </MyContextProvider>  
    </div>
    )
}

export default App
