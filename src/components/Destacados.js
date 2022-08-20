
import Card from "./Card"
import CardLg from "./CardLg"
import image1 from '../assets/dcarnes.jpg'
import image2 from '../assets/dmermeladas.jpg'
import image3 from '../assets/dquesos.jpg'
import image4 from '../assets/dsalsas.jpg'

const cards = [{
id:1,
title: "Nuestras Carnes",
image: image1,
price: 1600,
parrafo:"'Carne de res, ternera y cordero de la más alta calidad...'"
},
{
id:2,
title: "Mermeladas",
image: image2,
price: 3000,
parrafo:"'Pulpas puras concentradas endulzadas con Stevia...'"

},
{
id:3,
title: "Quesos",
image: image3,
price: 1800,
parrafo:"'Desde los quesos artesanales, hasta los quesos ecológicos...'"
},
{
id:4,
title: "Aderezos",
image: image4,
price: 2400,
parrafo:"'transformá el sabor de tus comidas...'"
}
]

{/*------------------ Comienzo de lo que se va a mostrar en resoluciones menores a "lg"--------------------*/}

const Destacados = () => {
    return (

<>
    <div className="bg-red-800 flex justify-center lg:hidden">
        <h1 className="text-white font-black uppercase p-4">
        Productos destacados
        </h1>
    </div >
    <div className='bg-white'>
        <div className="h-1/2 row center space-y-0.5 bg-black rounded-lg drop-shadow-lg lg:hidden">
        {
        cards.map(card =>(
            <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} parrafo={card.parrafo}/>
            </div>
        ))
        }
    </div>

    {/*------------------ Comienzo de lo que se va a mostrar en resoluciones a partir de "lg"--------------------*/}

        <div className="bg-red-800 flex justify-center">
            <h1 className="text-white font-black uppercase p-4">
            ofertas especiales
            </h1>
        </div>
        <div className="hidden lg:flex xl p-5 space-x-3">
            <div className="lg:flex xl p-5 space-x-3">
            {
            cards.map(card =>(
            <div className="col-md-4" key={card.id}>
            <CardLg title={card.title} imageSource={card.image} url={card.url} parrafo={card.parrafo} price={card.price}/>
            </div>
            ))
            }
            </div>
        </div>
        </div>
</>
    )
}


export default Destacados
