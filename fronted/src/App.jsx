import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, 
          Route, 
          Routes } from 'react-router-dom'

import { useEffect } from 'react'
import clienteAxios from './config/axios'


// . pages

import ShoppingCart from './pages/ShoppingCart'


// Layout (LayoutAuth) 
import LayoutAuth from './Layout/LayoutAuth'
import Layout from './Layout/layoutVentas'

// pages (usuarios) 
import Login from './pages/Login' 
import Registro from './pages/usuario/Registro' 
import OlvidePassword from './pages/usuario/OlvidePassword' 
import Confirmar from './pages/usuario/Confirmar'


function App() {
 // const [count, setCount] = useState(0)

 /*
useEffect(()=> {

  const consultarPrueba = async () =>

},[]

)
*/

  return (
    <Router>

          <Routes> {/* RUTAS PUBLICAS */}

              <Route path='/' element={<LayoutAuth />}>

              <Route index element={<Login />} />

              <Route path='registro' element={<Registro />} />

              <Route path='olvide-password' element={<OlvidePassword />} />

              <Route path='confirmar/:id' element={<Confirmar />} />

              <Route path='lista-carrito' element={<ShoppingCart/>}/>



              </Route>

          </Routes>


    </Router>
  )
}

export default App
