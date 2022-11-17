import {Outlet} from "react-router-dom"

// comoponents
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from "../components/Footer";
import Cards from "../components/Cards"



const Layout = () => {
  return (
    <>
        
          <Nav/>
          <Header/>
          <main className="contenedor-sombra">
            <Outlet/>
          </main>

          <h1>
            testts
          </h1>
          
  
          <Footer/>
        
    
    </>
  )
}

export default Layout