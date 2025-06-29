import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*Components*/

import './css/Pagina.css'

/*Page*/
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    {/* <Hooks></Hooks> */}
  </StrictMode>,
)
