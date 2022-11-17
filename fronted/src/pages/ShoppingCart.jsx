import React from 'react';
//import CartItem from '../components/CardItem'
import { useReducer } from 'react';
import { TYPES } from '../actions/shoppingActions';
import CartItem from '../components/CartItem';
import ProductItem from '../components/productItem';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducers';



const ShoppingCart = () => {

	const[state, dispatch] = useReducer(shoppingReducer, shoppingInitialState );
		
	const{products, cart} = state;


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
				{products.map((product)  => (<ProductItem key={product.id} data={product} addToCart={addToCart}/> ))}
			</article>
			<h3> Carrito</h3>

			<article className="box">
				<button onClick={clearCart}>
					Limpiar Carrito
				</button>

				{
					cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
				}
			</article>

		</div>

	);
  }

export default ShoppingCart;