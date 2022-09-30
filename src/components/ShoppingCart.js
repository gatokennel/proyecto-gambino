

// import React from 'react'
// import { useState } from "react";


// const ShoppingCart = () => {
//   const [showShoppingCart, setShowShoppingCart] = useState(false);
  
//     function handleShopping() {
//       setShowShoppingCart(!showShoppingCart)}
//   return (
//     <div>
//     {!showShoppingCart && 
//       <button onClick={handleShopping} class="bg-black w-screen text-white p-3 "> Abrir Shop Cart
//       </button>}
//       {showShoppingCart && (
//       <div class="relative z-10 " aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  
//   <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

//   <div class="fixed inset-0 overflow-hidden ">
//     <div class="absolute inset-0 overflow-hidden ">
//       <div class="pointer-events-none fixed inset-y-4 mt-36 right-0 flex max-w-full pl-10 mx-2">
        
//         <div class="pointer-events-auto w-screen max-w-md">
//           <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//             <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
//               <div class="flex items-start justify-between">
//                 <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Tu Carrito</h2>
//                 <div class="ml-3 flex h-7 items-center">
//                   <button onClick={handleShopping} type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
//                     <span class="sr-only">Cerrar</span>
//                     {/* <!-- Heroicon name: outline/x-mark --> */}
//                     <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               <div class="mt-8">
//                 <div class="flow-root">
//                   <ul role="list" class="-my-6 divide-y divide-gray-200">
//                     <li class="flex py-6">
//                       <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                         {/* <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center"> */}
//                       </div>

//                       <div class="ml-4 flex flex-1 flex-col">
//                         <div>
//                           <div class="flex justify-between text-base font-medium text-gray-900">
//                             <h3>
//                               <a href="#">Matambre de Cerdo</a>
//                             </h3>
//                             <p class="ml-4">$1899.00</p>
//                           </div>
//                           <p class="mt-1 text-sm text-gray-500">por/kilo</p>
//                         </div>
//                         <div class="flex flex-1 items-end justify-between text-sm">
//                           <p class="text-gray-500">Cantidad 1</p>

//                           <div class="flex">
//                             <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Quitar</button>
//                           </div>
//                         </div>
//                       </div>
//                     </li>

//                     <li class="flex py-6">
//                       <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                         {/* <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center"> */}
//                       </div>

//                       <div class="ml-4 flex flex-1 flex-col">
//                         <div>
//                           <div class="flex justify-between text-base font-medium text-gray-900">
//                             <h3>
//                               <a href="#">Tabasco</a>
//                             </h3>
//                             <p class="ml-4">$1099.00</p>
//                           </div>
//                           <p class="mt-1 text-sm text-gray-500">Aderezos</p>
//                         </div>
//                         <div class="flex flex-1 items-end justify-between text-sm">
//                           <p class="text-gray-500">Cantidad 1</p>

//                           <div class="flex">
//                             <button onClick={handleShopping} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Quitar</button>
//                           </div>
//                         </div>
//                       </div>
//                     </li>

//                     {/* <!-- More products... --> */}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
//               <div class="flex justify-between text-base font-medium text-gray-900">
//                 <p>Subtotal</p>
//                 <p>$262.00</p>
//               </div>
//               <p class="mt-0.5 text-sm text-gray-500">Envíos Gratis!</p>
//               <div class="mt-6">
//                 <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800">Finalizar Compra</a>
//               </div>
//               <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
//                 <p>
                  
//                   <button onClick={handleShopping} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
//                     Seguir Comprando
//                     <span aria-hidden="true"> &rarr;</span>
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// )}
// </div>
// )
// }

// export default ShoppingCart