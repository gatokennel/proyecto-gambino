import React from 'react'
import Achuras from './Productos/Achuras'
import CarneCerdo from './Productos/CarneCerdo'
import CarneVacuna from './Productos/CarneVacuna'
import Gourmet from './Productos/Gourmet'
import Quesos from './Productos/Quesos'

const Tienda = () => {
  return (
    <>


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
    </>
  )
}

export default Tienda