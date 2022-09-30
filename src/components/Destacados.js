

// import Card from "./Card"
// import CardLg from "./CardLg"
// import image1 from '../assets/dcarnes.jpg'
// import image2 from '../assets/dmermeladas.jpg'
// import image3 from '../assets/dquesos.jpg'
// import image4 from '../assets/dsalsas.jpg'
// import enviosBackground from '../assets/zona-de-envios.jpg'
// import { forwardRef } from "react";

// const cards = [{
// id:1,
// title: "Nuestras Carnes",
// image: image1,
// price: 1600,
// parrafo:"'Carnes de res, ternera y cordero de la más alta calidad...'"
// },
// {
// id:2,
// title: "Mermeladas",
// image: image2,
// price: 3000,
// parrafo:"'Pulpas puras concentradas endulzadas con Stevia...'"
// },
// {
// id:3,
// title: "Quesos",
// image: image3,
// price: 1800,
// parrafo:"'Desde los quesos artesanales, hasta los quesos ecológicos...'"
// },
// {
// id:4,
// title: "Aderezos",
// image: image4,
// price: 2400,
// parrafo:"'transformá el sabor de tus comidas...'"
// }
// ]

// /*------------------ Comienzo de lo que se va a mostrar en resoluciones menores a "lg"--------------------*/

// const Destacados = forwardRef((props, ref) => {
//     return (

// < >
//     <div ref={ref}  >
//         <div className="bg-red-800 flex justify-center lg:hidden " id='destacado' >
//             <h1 className="text-white font-black uppercase p-4 lg:hidden">
//             Productos destacados
//             </h1>
//         </div >
//         <div className='bg-white'>
//             <div className="h-1/2 row center space-y-0.5 bg-black lg:hidden">
//             {
//                 cards.map(card =>(
//                     <div className="" key={card.id}>
//                     <Card title={card.title} imageSource={card.image} url={card.url} parrafo={card.parrafo}/>
//                     </div>
//                 ))
//                 }
//             </div>

//             {/*------------------ Comienzo de lo que se va a mostrar en resoluciones a partir de "lg"--------------------*/}

//             <div className="hidden lg:block" id='destacado'>
//                 <div className="bg-red-800 flex justify-center p-6">
//                     <h1 className="text-white text-2xl font-black uppercase p-">
//                     ofertas especiales
//                     </h1>
//                 </div>
//                 <div className="flex justify-center xl p-3 space-x-3">
//                     <div className="flex xl p-5 space-x-3">
//                     {
//                     cards.map(card =>(
//                         <div className="" key={card.id}>
//                         <CardLg title={card.title} imageSource={card.image} url={card.url} parrafo={card.parrafo} price={card.price}/>
//                         </div>
//                     ))
//                     }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     <div class="py-4">
//         <div style={{backgroundImage:`url(${enviosBackground})`}} className='w-full h-64 bg-cover p-16 hover:opacity-90 duration-1000'>
//             <div className="flex justify-center text-white text-center text-xl">
// 	            <div class= "">
// 			    {/* <h4 class="text-red-800 text-4xl pb-2 ">envios</h4> */}
//                     <h2 className="uppercase pb-4">Zonas de envíos</h2>
//                     <p className="font-bold">( Funes – Fishertoon – Roldan )</p>
//                 </div>
//         	</div>	
//         </div>
//     </div>
// </>
//     )
// })


// export default Destacados
