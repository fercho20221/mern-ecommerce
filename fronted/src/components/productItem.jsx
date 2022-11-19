
 
   //destructuramos los datos
    /// Se usa un Arrow Function por que se va a pasar un parametro
const ProductItem = ({data, addToCart}) => {
 
  let {id,description, precio, url} = data;
  return (
  <div style={{border:"thin solid gray", padding: "1rem"}}>
    
       <h4>{description}</h4>
       <h5>${precio}.00</h5>
       <button onClick= {() => addToCart(id)}> Agregar</button>   
  </div>
)
}

export default ProductItem