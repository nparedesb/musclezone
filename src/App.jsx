import './css/Pagina.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import Home from "./Home"
import Valores from "./page/Valores"
import Carrito from "./page/Carrito"
import Productos from "./page/Productos"
import Servicios from "./page/Servicios"
import { Footer } from './components/Footer'



function App() {

  return (
    <BrowserRouter>
      <div>
      <nav>
       <NavLink to="/">
        Inicio    
       </NavLink>
        |
        <NavLink to="/Carrito">
        Carrito 
        </NavLink>
        |
        <NavLink to="/Productos">
        Productos
        </NavLink>
        |
        <NavLink to="/Servicios">
        Servicios
        </NavLink>
        |
        <NavLink to="/Valores">
        Valores
        </NavLink>
      </nav>
          
      <main className="flex-grow flex-items-center justify-center">
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Carrito" element={<Carrito/>}></Route>
          <Route path="/Productos" element={<Productos/>}></Route>
          <Route path="/Servicios" element={<Servicios/>}></Route>
          <Route path="/Valores" element={<Valores/>}></Route>
        </Routes>  
      </main>
      <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}

export default App
