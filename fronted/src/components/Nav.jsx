import {Link} from "react-router-dom"
//import styled from "styled-components"
import NavButton from "./NavButton"
import imgShopping from "../images/shopping.png"
import logo from "../images/default-logo.png"


const Nav=() => {
  return (
   <>
      <Navbar>
        <img className="logo-img" src={logo}></img>
        
        <div>
              <Link to="lista-productos">Lista de productos</Link>
              <Link to="modificar-productos">Modificar Producto</Link>
              <Link to="lista-ventas">Lista ventas</Link>
              <Link to="lista-carrito">Carrito de Compras</Link>
              <a href="#"><img src={imgShopping}/></a>
          
        </div>
        <NavButton/>

      </Navbar>
    </>   
  )
}

export default Nav

// Definimos variables


const Navbar = `
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: 0.5rem;
  background-color: #FAF0EE;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    color: black;
    text-decoration: none;
    margin-right: 3rem;
    font-size: 1.5rem;
    font-weight: medium;
    
  }

  a:hover{
    padding: 2.0rem;  /*Alto de la barra de navegacion*/
    background-color: #EFD6CF;
    color: var(--oscuro);
    
  }
  img{
    width: 2.5rem;
    height: 2.0rem;
  }
  .logo-img{
    width: 5rem;
    height: 2.0rem;
    margin-left: 2.5rem;
  }




`