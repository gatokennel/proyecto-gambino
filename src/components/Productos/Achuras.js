// import React from 'react'
// import chorizo from '../../images/chorizo.jpeg';
// import morcilla from '../../images/morcilla.jpeg'
// import riñon from '../../images/riñon.jpeg'
// import molleja from '../../images/molleja.jpeg'

// import chinchulin from '../../images/chinchulin.jpeg'


// const Achuras = () => {

//     const achura = [
//         {
//             "id": 11,
//             "img": chorizo,
//             "name": "Chorizo",
//             "price": 1.199,
//             "description": "Chorizo puro cerdo",
//             "categoryId": 3
//         },
//         {
//             "id": 12,
//             "img": morcilla,
//             "name": "Morcilla",
//             "price": 899,
//             "description": "Morcilla dulce",
//             "categoryId": 3
//         },
//         {
//             "id": 13,
//             "img": riñon,
//             "name": "Riñon",
//             "price": 729,
//             "description": "Riñones",
//             "categoryId": 3
//         },
//         {
//             "id": 14,
//             "img": molleja,
//             "name": "Mollejas",
//             "price": 2.499,
//             "description": "Mollejas de corazon",
//             "categoryId": 3
//         },
//         {
//             "id": 15,
//             "img": chinchulin,
//             "name": "Chinchulines",
//             "price": 719,
//             "description": "Chinchulin",
//             "categoryId": 3
//         }
//     ]

//     return (
//         <body className="w-full bg-white-100">
//                             <div className='flex flex-wrap m-5 justify-around'>
//             {achura.map((item) =>(
//             <div className="transition-transform w-72 bg-white drop-shadow-md rounded-lg m-5 hover:scale-105 hover:transition-transform">
//             <img className="object-cover rounded-tl-lg rounded-tr-lg w-full h-60 "
//                 src={item.img} />
//             <div className="px-5 py-3 space-y-2">
//                 <h3 className="text-lg">{item.name}</h3>
//                 <div className="space-x-2">
//                     <span className="px-3 py-0.5 border border-red-600 text-[11px] text-red-600">{item.description}</span>
//                 </div>
//                 <p className="space-x-2">
//                     <span className="text-2xl font-semibold">${item.price}</span>
//                     {/* <span className="text-sm line-through text-gray-500">$1000</span> */}
//                     {/* <span className="text-sm text-red-700">40% off</span> */}
//                 </p>
//                 <div className="flex justify-between items-center pt-3 pb-2">
//                     <a href="#"
//                         className="px-4 py-2 bg-red-800 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">
//                         Agregar al carrito</a>

//                     <a href="#" title="Add to Favorites"
//                         className="text-2xl text-gray-300 hover:text-red-800 duration-300">&hearts;</a>
//                 </div>
//             </div>
//         </div>


//             ))}
//         </div>
//         </body>
//     )
// }

// export default Achuras