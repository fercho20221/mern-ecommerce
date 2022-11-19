import {Outlet} from "react-router-dom"

// comoponents
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import styles from '../assets/css/styles.css'




const Layout = () => {
  return (
    <>
        
          <Nav/>
          <Header/>
          <main className="contenedor-sombra">
            <Outlet/>
          </main>
          
  
          <Footer/>
        
    
    </>
  )
}

export default Layout