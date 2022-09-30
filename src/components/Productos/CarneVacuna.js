// import React from 'react'
// import asado from '../../images/asado.jpeg';
// import vacio from '../../images/vacio.jpeg'
// import matambre from '../../images/matambre.jpg'
// import nalga from '../../images/nalga.jpg'
// import bife from '../../images/bife.jpg'


// const CarneVacuna = () => {

//     const carneVacuna = [
//         {
//             "id": 1,
//             "img": matambre,
//             "name": "Matambre",
//             "price": 1.499,
//             "description": "matambre de ternera",
//             "categoryId": 1
//         },
//         {
//             "id": 2,
//             "img": vacio,
//             "name": "Vacio",
//             "price": 1.955,
//             "description": "Punta de vacio al vacio",
//             "categoryId": 1
//         },
//         {
//             "id": 3,
//             "img": nalga,
//             "name": "Nalga",
//             "price": 1.855,
//             "description": "Tapa de nalga al vacio",
//             "categoryId": 1
//         },
//         {
//             "id": 4,
//             "img": asado,
//             "name": "Asado",
//             "price": 1.599,
//             "description": "Asado banderita",
//             "categoryId": 1
//         },
//         {
//             "id": 5,
//             "img": bife,
//             "name": "Bife angosto",
//             "price": 1.999,
//             "description": "Bife angosto sin hueso",
//             "categoryId": 1

//         }
//     ]

//     return (
//         <body className="w-full bg-white-100">
//                             <div className='flex flex-wrap m-5 justify-around'>
//             {carneVacuna.map((item) =>(
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

// export default CarneVacuna