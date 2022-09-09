import React from 'react'
import Contact from './Contact'
import Navigation from './Navigation'
import Achuras from './Productos/Achuras'
import CarneCerdo from './Productos/CarneCerdo'
import CarneVacuna from './Productos/CarneVacuna'
import Gourmet from './Productos/Gourmet'
import Quesos from './Productos/Quesos'

const Tienda = () => {
  return (
    <>
    <Navigation  id='tienda'/>
    <div> SEGUNDA PAGINA TIENDA ONLINE 

    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>CARNE VACUNA</div>
    <CarneVacuna />
    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>CARNE DE CERDO</div>
    <CarneCerdo />
    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>ACHURAS</div>
    <Achuras />
    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>QUESOS Y EMBUTIDOS</div>
    <Quesos />
    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>PRODUCTOS GOURMET</div>
    <Gourmet />
    </div>
    <Contact />
    </>
  )
}

export default Tienda