
import React from 'react'
// import { useState } from "react";


const CartItem = ({data,delFromCart}) => {
    let {id,name,price,quantity,img} = data;

    // const [showShoppingCart1, setShowShoppingCart1] = useState(false);
    // function handleShopping1() {
    //   setShowShoppingCart1(!showShoppingCart1)};
      
return (

    <div class="pointer-events-auto  max-w-md">
      <div class="flex h-full flex-col bg-white shadow-xl">
        <div class="flex-1 py-6 px-4 sm:px-6">
          <div class="flex items-start justify-between">
          </div>
          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              <li class="flex py-4">
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={img} alt="img" class="h-full w-full object-cover object-center"/>
                </div>
                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">{name}</a>
                      </h3>
                      <p class="ml-4">${price*quantity}</p>
                    </div>
                    <p class="text-gray-500">Producto x {quantity}</p>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm">
                    <button onClick={()=> delFromCart(id)} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Quitar producto</button>
                    <div class="flex">
                      <button onClick={()=> delFromCart(id,true)} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Quitar todo</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>              
        </div>   
      </div> 
      
    </div>


//             {/* <div class = "border-solid border-2 border-indigo-600">
//               <h4>{name}</h4>
//               <h5>${price}.00 X {quantity} = ${price*quantity}.00</h5>
//                 <button onClick={()=> delFromCart(id)}>Eliminar Uno</button>
//                 <br/>
//                 <button onClick={()=> delFromCart(id,true)}>Eliminar Todos</button>
//              </div>   */}

)
}

export default CartItem