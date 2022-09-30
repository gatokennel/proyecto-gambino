

import Card from "./Card"
import CardLg from "./CardLg"
import enviosBackground from '../assets/zona-de-envios.jpg'
import asado from '../images/asado.jpeg'
import barbacoa from '../images/barbacoa.jpg';
import brie from '../images/brie.jpg'
import matambrecerdo from '../images/matambrecerdo.jpg';



const cards = [{
title: "Nuestras Carnes",
image: asado,
parrafo:"'Carnes de res de la más alta calidad...'"
},
{
title: "Aderezos",
image: barbacoa,
parrafo:"'Transformá el sabor de tus comidas...'"
},
{
title: "Quesos",
image: brie,
parrafo:"'Desde los quesos artesanales, hasta los ecológicos...'"
},
{
title: "Carne de Cerdo",
image: matambrecerdo,
parrafo:"'Métodos de cría más sanos, carne más saludable...'"
}
]


/*------------------ Comienzo de lo que se va a mostrar en resoluciones menores a "lg"--------------------*/

const Destacados = () => {
    return (

<>
    <div id='destacado'>
        <div className="bg-red-800 flex justify-center lg:hidden ">
            <h1 className="text-white font-black uppercase p-4 lg:hidden">
            Productos destacados
            </h1>
        </div >
        <div className='bg-black'>
            <div className="h-1/2 row center space-y-0.5 bg-black lg:hidden ">
            {
                cards.map(card =>(
                    <div className="" key={card.id}>
                    <Card title={card.title} imageSource={card.image} url={card.url} parrafo={card.parrafo} />
                    </div>
                ))
                }
            </div>

            {/*------------------ Comienzo de lo que se va a mostrar en resoluciones a partir de "lg"--------------------*/}

            <div className="hidden lg:block" id='destacado'>
                <div className="bg-red-800 flex justify-center" id='destacado'>
                    <h1 className="text-white font-black uppercase p-4">
                    Productos destacados
                    </h1>
                </div>
                <div className="flex justify-center p-3">
                    <div className="flex xl p-1 space-x-2 xl:space-x-10 ">
                    {
                    cards.map(card =>(
                        <div className="" key={card.id}>
                        <CardLg title={card.title} imageSource={card.image} url={card.url} parrafo={card.parrafo} price={card.price}/>
                        </div>
                    ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="py-1 bg-black">
        <div style={{backgroundImage:`url(${enviosBackground})`}} className='w-full h-64 bg-cover p-16 hover:opacity-90 duration-1000 '>
            <div className="flex justify-center text-white text-center text-xl">
	            <div class= "">
			    {/* <h4 class="text-red-800 text-4xl pb-2 ">envios</h4> */}
                    <h2 className="uppercase pb-4">Zonas de envíos</h2>
                    <p className="font-bold">( Funes – Fishertoon – Roldan )</p>
                </div>
        	</div>	
        </div>
    </div>
</>
    )
}


export default Destacados
