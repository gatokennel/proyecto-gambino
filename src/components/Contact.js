import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
import gambino from "../images/gambino.png"

const Contact = () => {
  return (
    <div className="bg-black text-center text-white " id='contacto'> 
    <h1 className="text-4xl p-3 ">LOS ESPERAMOS</h1>
      <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 bg-black">
        <div className="row-span-3 self-center">
          <div className='p-3'>
            <h4 className='text-white text-3xl pb-2'>La Empresa</h4>
            <p className='text-gray-400 pb-2'>En Carnicería GAMBINO podes encontrar: <br/>
            carnes de ternera, cerdo, pollo, achuras, comidas pre-elaboradas, fiambrería, y mucho más!</p>
          </div>
          <div className='p-3'>
            <h4 className='text-white text-3xl pb-2'>Horarios</h4>
            <p className='text-gray-400 pb-2'>Lu – Sab: 8 – 13 hs / 17 – 20 hs</p>
          </div>
          <div className='p-3'>
            <h4 className='text-white text-3xl pb-2'>Sucursales</h4>
            <p className='text-gray-400 pb-2'>Consultá por nuestra sucursales haciendo click <a href='#' className='text-white hover:text-gray-400 duration-200'>AQUI</a></p>
          </div>
          <div className='p-3'>
            <p className='text-gray-400 pb-2'>CREADO POR <a href='https://github.com/gatokennel/proyecto-gambino' target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-400 duration-200'>PROYECTO GAMBINO</a></p>
          </div>
        </div>
        <div className="col-span-2 self-center flex justify-center">
          <img className="object-cover rounded-full" width="200" height="200" src={gambino} alt="logo"></img>
        </div>

        <div class="row-span-2 col-span-2 text-white">
          <h1 className='text-white text-center text-2xl pb-2'>SEGUINOS</h1>
          <div className="flex flex-nowrap flex justify-center ">
            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer" className='p-2'><FaInstagram className='hover:bg-gray-800 hover:rounded-lg hover:duration-200 duration-200' size={90} color={'white'} /></a>
            <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='p-3'><FaFacebook className='hover:bg-gray-800 hover:rounded-lg hover:duration-200 duration-200' size={90} color={'white'} /></a>
            <a href='https://www.tiktok.com/' target="_blank" rel="noopener noreferrer" className='p-3'><FaTiktok className='hover:bg-gray-800 hover:rounded-lg hover:duration-200 duration-200' size={90} color={'white'} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact