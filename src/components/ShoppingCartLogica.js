


import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { TYPES } from '../actions/shoppingAction';
import { useState } from "react";

const ShoppingCartLogica = () => {
  const [showShoppingCart1, setShowShoppingCart1] = useState(false);
  
  function handleShopping1() {
    setShowShoppingCart1(!showShoppingCart1)}

  const [state, dispatch] = useReducer(
  shoppingReducer,
  shoppingInitialState);
  
  const {products, cart} = state

  const addToCart = (id) => {
    dispatch({type:TYPES.ADD_TO_CART,payload:id})
  };
  const delFromCart = (id,all =false) => {
    if (all) {
      dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
    }
    else {
      dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
    }
  };
  const clearCart = () => {
    dispatch({type:TYPES.CLEAR_CART})
  };
  

  return (
    <div>
      <button onClick={handleShopping1} class="bg-black w-screen text-white p-3 "> Abrir Shop Cart Logica
      </button>
    
      {showShoppingCart1 && (
    <div class ="-w-64 ">
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article class="flex flex-64 p-4 m-4 shadow-lg">
         {products.map((product)=>(
         <ProductItem key={product.id}data={product} addToCart={addToCart}/>
         ))}
        </article>
        <div>
        <h3>Carrito</h3>
        <article className="box">
          <button onClick={clearCart}>Limpiar Carrito</button>
          {cart.map((item,index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart}/>
          ))}
        </article>
        </div>
        </div>
        )}
    </div>
  )
}

export default ShoppingCartLogica