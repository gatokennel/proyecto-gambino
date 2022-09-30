// import React from 'react'
// import barbacoa from '../../images/barbacoa.jpg';
// import mostaza from '../../images/mostaza.jpg'
// import tabasco from '../../images/tabasco.jpg'
// import salsaqueso from '../../images/salsaqueso.jpg'
// import carbon from '../../images/carbon.jpg'


// const Gourmet = () => {

//     const gourmet = [
//         {
//             "id": 21,
//             "img": barbacoa,
//             "name": "Barbacoa",
//             "price": 999,
//             "description": "Aderezo de barbacoa",
//             "categoryId": 5
//         },
//         {
//             "id": 22,
//             "img": mostaza,
//             "name": "Mostaza",
//             "price": 899,
//             "description": "Aderezo de mostaza",
//             "categoryId": 5
//         },
//         {
//             "id": 23,
//             "img": tabasco,
//             "name": "Tabasco",
//             "price": 1.099,
//             "description": "Salsa picante de tabasco",
//             "categoryId": 5
//         },
//         {
//             "id": 24,
//             "img": salsaqueso,
//             "name": "Salsas de queso",
//             "price": 799,
//             "description": "salsa premium de queso",
//             "categoryId": 5
//         },
//         {
//             "id": 25,
//             "img": carbon,
//             "name": "Carbon",
//             "price": 699,
//             "description": "Bolsa de carbon",
//             "categoryId": 5

//         }
//     ]

//     return (
//         <body className="w-full bg-white-100">
//                             <div className='flex flex-wrap m-5 justify-around'>
//             {gourmet.map((item) =>(
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

// export default Gourmet