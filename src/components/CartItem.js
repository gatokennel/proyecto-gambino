


import React from 'react'

const CartItem = ({data,delFromCart}) => {
    let {id,name,price,quantity} = data
  return (
    <div class = "border-solid border-2 border-indigo-600">
        <h4>
            {name}
        </h4>
        <h5>
            ${price}.00 X {quantity} = ${price*quantity}.00
        </h5>
        <button onClick={()=> delFromCart(id)}>Eliminar Uno</button>
        <br/>
        <button onClick={()=> delFromCart(id,true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem