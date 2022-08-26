import React from 'react'
import carneVacuna from '../images/asado.jpeg'
import carneCerdo from '../images/bondiola.jpeg'
import barbacoa from '../images/barbacoa.jpg'
import molleja from '../images/molleja.jpeg'
import queso from '../images/quesofresco.jpg'
import salame from '../images/salame.jpeg'



const CardCarousel = () => {
  return (
        
<div className='h-screen w-100% bg-meat flex'>
    <div className='w-1/3 h-full bg-carneVacuna bg-cover flex justify-center items-center '>
        <div className='border-white rounded-2xl border-2 h-40% w-80% flex justify-center items-center font-black text-2xl'>
            <h1 className='uppercase text-white'>Carne vacuna</h1>
        </div>
    </div>
    <div className='w-1/3 h-full bg-carneCerdo bg-cover flex justify-center items-center'>
    <div className='border-white rounded-2xl border-2 h-40% w-80% flex justify-center items-center font-black text-2xl'>
            <h1 className='uppercase text-white'>Carne de cerdo</h1>
        </div>
    </div>
    <div className='w-1/3 h-full bg-achuras bg-cover flex justify-center items-center'>
    <div className='border-white rounded-2xl border-2 h-40% w-80% flex justify-center items-center font-black text-2xl'>
            <h1 className='uppercase text-white'>Achuras</h1>
        </div>
    </div>
    </div>

  )
}

export default CardCarousel