import React from 'react'
import imagen from '../images/85cae0c9-6f71-4803-9668-e630e0cd16f0.jpg'
import imagen2 from '../images/94308581-abff-47d1-aa5a-76d6099a9ef3.jpg'
import imagen3 from '../images/fe7d9408-5651-4a1b-b233-974869ebc7f3.jpg'
import imagen4 from '../images/zapato1.jpg'

//import styled from 'styled-components'


const Cards = () => {
  return (
    <>
      <CardStyle>
        <main>
          <div className="container">
            <img src={imagen} className="card-img-top" alt="..." />
            <table className='table-style'>

              <tr>

                <td><h4>NOMBRE</h4></td>

                <td>Sandalia Tacon chin</td>


              </tr>

              <tr>

                <td><h4>DESCRIPCION</h4></td>

                <td>Una zapatilla destalonada creada en un mix de texturas, atemporal y sofisticada. Con una altura cómoda de 7.5cm es uno de nuestros modelos perfectos para llevar todo el día.</td>

              </tr>
              <tr>

                <td ><h4>PRECIO</h4></td>

                <td>139.999 </td>

              </tr>
              <tr>

                <td><h4>STOCK</h4></td>

                <td>15 UND</td>

              </tr>

            </table>
            

          
          </div>

          
        </main>
       

      </CardStyle>
    </> 
      
  )
}

export default Cards

const CardStyle = `

  .card{
    width: 25rem;
    height: 40rem;
    margin-left: 5rem;
    margin-top: 0rem;
    background-color: #fff;
    border-radius: 20px;
    
    
  }

  .card-img-top{
    width: 25rem;
    height: 30rem;;
    margin-left: 0rem;
    border-radius: 20px;
    
  }

  .button-compra{
    width:10rem;
    border-color: transparent;
    border-radius: 20px;
    margin-left: 2rem;


  }

  .p-style{
    margin-left: 2.5rem;
    font-weight: bold;
    


  }

  .a-style{
    margin-left: 2.5rem;
    font-weight: medium;
    color: red;
    text-decoration-line: none;
  

  }

  .container{
    display: flex;
        flex-wrap: wrap;
    justify-content:center;
    

  }

  .select{
    width: 20%;
    margin-left: 4rem;
    border-radius:50px;
    
  }

.a-talla{
  margin-left: 6.5rem;
  text-decoration-line: none;
  color: black;
  font-weight: bold;
}
  
  




`