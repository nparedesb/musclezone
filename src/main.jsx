import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*Components*/

import { Footer } from './components/Footer.jsx'
/* import { Layout } from './components/Layout.jsx'
import { Button } from './components/Button.jsx' */

// import './index.css'
import './css/Pagina.css'

/*Page*/
import Home from "./page/Home"
import Carrito from "./page/Carrito"
import Productos from "./page/Productos"
import Servicios from "./page/Servicios"
import Valores from "./page/Valores"

import { Hooks } from "./components/Hooks"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
{/* <Layout>
      <Button label="Inicio"></Button>
      <Button label="Nuestros Valores"></Button>
      <Button label="Nuestros Servicios"></Button>
      <Button label="Nuestros Productos"></Button>
      <Button label="Carrito de compras"></Button>
    </Layout> */}
    <Footer></Footer>
    <Hooks></Hooks>
  </StrictMode>,
)
