import React from 'react';
//import CartItem from '../components/CardItem'
import { useReducer, useEffect, useState} from 'react';
import { TYPES } from '../actions/shoppingActions';
import CartItem from '../components/CartItem';
import ProductItem from '../components/productItem';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducers';
import clienteAxios from '../config/axios';



const ShoppingCart = () => {

	const[state, dispatch] = useReducer(shoppingReducer, shoppingInitialState );
		
	const{products, cart} = state;

	const [ productos, setProductos ] = useState([]);


	useEffect( () =>{const 
		consultarApi = async () =>{
			try 
			{const { data } = await clienteAxios('/productos/get');
			setProductos(data);

			console.log(data)
		} 
		catch (error) {console.log("Error: " + error.message);
	         }};
			 consultarApi();}, []);




    /// SE DEFINEN LOS METODOS DEL CARRITO DE COMPRAS
	const addToCart = (id) => {
		//console.log(id);
		// La funcion Dispatch pasa la accion que tiene el tipo
		// Payload es el dato que va a modificar el estado de la accion
		dispatch({type: TYPES.ADD_TO_CART, payload: id});
	}

	const delFromCart = (id,all = false) => {
		console.log(id,all)

		if(all){
			dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
			
		}
		else{
			dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})

		}
	}

	const clearCart = () => {
		dispatch({type:TYPES.CLEAR_CART})
	}

	return (
		
		<div>
			<h2> CARRITO DE COMPRAS</h2>
			<h3> Productos</h3>
			<article className="box grid-responsive">
				{productos.map((product)  => (<ProductItem key={productos.id} data={product} addToCart={addToCart}/> ))}
			</article>
			<h3> Carrito</h3>

			<article className="box">
				<button onClick={clearCart}>
					Limpiar Carrito
				</button>

				{
					productos.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
				}
			</article>

		</div>

	);
  }





export default ShoppingCart;