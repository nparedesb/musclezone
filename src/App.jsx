import './css/Pagina.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import Catalogo from "./page/Catalogo"
import Valores from "./page/Valores"
import Carrito from "./page/Carrito"
import Productos from "./page/Productos"
import Servicios from "./page/Servicios"
import { Footer } from './components/Footer'



function App() {

  return (
    <div className='host'>
      <header>
        <h1 className="titulo">Muscle Zone</h1>
      </header>
    <>
    <BrowserRouter>
      <div>
      <nav>
        | |
        <NavLink to="/Valores">
          Valores
        </NavLink>
        | |
        <NavLink to="/Servicios">
          Servicios
        </NavLink>
        | |
        <NavLink to="/Productos">
          Productos
        </NavLink>
        | |
        <NavLink to="/Catalogo">
          Cátalogo    
        </NavLink>
        | |
        <NavLink to="/Carrito">
          Carrito de comparas 
        </NavLink>
        | |
      </nav>
          
      <main className="flex-grow flex-items-center justify-center">
        <Routes>
          <Route path="/Valores" element={<Valores/>}></Route>
          <Route path="/Servicios" element={<Servicios/>}></Route>
          <Route path="/Productos" element={<Productos/>}></Route>
          <Route path="/Catalogo" element={<Catalogo/>}></Route>
          <Route path="/Carrito" element={<Carrito/>}></Route>
        </Routes>  
      </main>
      <Footer></Footer>
      </div>
    </BrowserRouter>
    </>
    </div>
  )
}

export default App
