// import React from 'react'
// import quesofresco from '../../images/quesofresco.jpg';
// import brie from '../../images/brie.jpg'
// import provoleta from '../../images/provoleta.jpeg'
// import salame from '../../images/salame.jpeg'
// import salamepimienta from '../../images/salamepimienta.jpg'


// const Quesos = () => {

//     const quesos = [
//         {
//             "id": 16,
//             "img": quesofresco,
//             "name": "Queso fresco",
//             "price": 799,
//             "description": "Queso fresco premium",
//             "categoryId": 4
//         },
//         {
//             "id": 17,
//             "img": brie,
//             "name": "Brie",
//             "price": 999,
//             "description": "Queso brie premium",
//             "categoryId": 4
//         },
//         {
//             "id": 18,
//             "img": provoleta,
//             "name": "Provoleta",
//             "price": 350,
//             "description": "Queso provoleta",
//             "categoryId": 4
//         },
//         {
//             "id": 19,
//             "img": salame,
//             "name": "Salame",
//             "price": 499,
//             "description": "Salame milan fino",
//             "categoryId": 4
//         },
//         {
//             "id": 20,
//             "img": salamepimienta,
//             "name": "Salame con pimienta",
//             "price": 799,
//             "description": "Salame condimentado con pimienta",
//             "categoryId": 4
//         }
//     ]

//     return (
//         <body className="w-full bg-white-100">
//                             <div className='flex flex-wrap m-5 justify-around'>
//             {quesos.map((item) =>(
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

// export default Quesos