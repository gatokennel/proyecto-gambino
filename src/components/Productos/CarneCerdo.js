// import React from 'react'
// import peceto from '../../images/peceto.jpg';
// import pechito from '../../images/pechito.jpeg'
// import bondiola from '../../images/bondiola.jpeg'
// import costillitas from '../../images/costillitas.jpeg'
// import matambrecerdo from '../../images/matambrecerdo.jpg'


// const CarneCerdo = () => {

//     const carneCerdo = [
//         {
//             "id": 6,
//             "img": peceto,
//             "name": "Peceto",
//             "price": 1.899,
//             "description": "Peceto de cerdo",
//             "categoryId": 2
//         },
//         {
//             "id": 7,
//             "img": pechito,
//             "name": "Pechito",
//             "price": 899,
//             "description": "Pechito de cerdo",
//             "categoryId": 2
//         },
//         {
//             "id": 8,
//             "img": bondiola,
//             "name": "Bondiola",
//             "price": 1.299,
//             "description": "Bondiola de cerdo",
//             "categoryId": 2
//         },
//         {
//             "id": 9,
//             "img": costillitas,
//             "name": "Costillitas",
//             "price": 950,
//             "description": "Costeletas de cerdo",
//             "categoryId": 2
//         },
//         {
//             "id": 10,
//             "img": matambrecerdo,
//             "name": "Matambre de cerdo",
//             "price": 1.899,
//             "description": "Matambrito de cerdo",
//             "categoryId": 2


//         }
//     ]

//     return (
//         <body className="w-full bg-white-100">
//                             <div className='flex flex-wrap m-5 justify-around'>
//             {carneCerdo.map((item) =>(
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

// export default CarneCerdo