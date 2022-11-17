// ACA SE DEFINEN LOS ESTADOS Y LA LOGICA
import {useState, useEffect} from 'react'
import clienteAxios from '../config/axios';


import { TYPES } from "../actions/shoppingActions";

//import { getProductos } from "../../../backend/controllers/productoController";

//const [ productos, setProductos] = useState([])

export  const shoppingInitialState = {

    products:[
        {id:1, name: "producto1",  price:100},
        {id:2, name: "producto22", price:2100},
        {id:3, name: "producto13", price:3100},
        {id:4, name: "producto14", price:4100},
        {id:5, name: "producto15", price:5100},
        {id:6, name: "producto16", price:6100},
        {id:7, name: "producto17", price:7100},
    ],
    cart:[]
    

    
    






   
}

export function shoppingReducer(state, action){
    switch (action.type){
        case TYPES.ADD_TO_CART:{
            //  cuando id del producto coincida con el Payload, entonces almacena el objeto en la variable
            let newItem = state.products.find((product) =>product.id === action.payload)
            //console.log(newItem);

            // con esta instruccion compara si el elemento por elId ya esta en el carrito

            let itemInCart = state.cart.find(item => item.id === newItem.id)
            // se retorna el estado
            // retornar el estado pero en la propiedad cart va a ser igual al spred operator
            // en el arreglo de cart se hace una copia de lo que tiene state.cart, y agregale newItem
            
            return itemInCart ? {
                ...state,
                cart: state.cart.map(item=> item.id===newItem.id ? {...item,quantity: item.quantity +1}: item)

            }
            :{...state,
                cart:[...state.cart, {...newItem, quantity:1}],}

            
            
        }
        case TYPES.REMOVE_ONE_FROM_CART:{

            let itemToDelete = state.cart.find(item =>item.id===action.payload);

            return itemToDelete.quantity >1
            ?{
                ...state,
                cart: state.cart.map((item) =>
                item.id === action.payload
                ?{...item, quantity: item.quantity -1}
                :item
                ),
            } 
            : {
                ...state,
                cart: state.cart.filter((item)=>item.id !==action.payload),

            }

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

            return {

                ...state,
                cart: state.cart.filter((item)=>item.id !==action.payload),
            }


        }
        case TYPES.CLEAR_CART: 

        return shoppingInitialState;
        
        default:
            return state;
        
    }
}