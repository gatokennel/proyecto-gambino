import React from 'react'
import Contact from './Contact'
import MenuDesplegable from './MenuDesplegable'
import MenuDesplegableTienda from './MenuDesplegableTienda'
import Navigation from './Navigation'
import NavigationTienda from './NavigationTienda'
import Achuras from './Productos/Achuras'
import CarneCerdo from './Productos/CarneCerdo'
import CarneVacuna from './Productos/CarneVacuna'
import Gourmet from './Productos/Gourmet'
import Quesos from './Productos/Quesos'
import ShoppingCartLogica from './ShoppingCartLogica'
import TiendaOnline from './TiendaOnline'
import gambino from "../images/gambino.png"
import HeaderTienda from './HeaderTienda'

const Tienda = () => {
  return (
    <>
    <NavigationTienda />
    <div id='/tienda'>
    <HeaderTienda  /></div>
    <div className="w-11/12 h-[10vh] flex flex-row justify-between fixed z-50 top-6 left-6  md:hidden" > 
                    <div className="text-white text-[5vh] bg-black rounded-full p-[2vh]">
                        <MenuDesplegableTienda/>
                    </div>
                    {/* <div className="flex text-white text-[5vh] bg-black rounded-full p-[2vh]">
                    <div><ShoppingCartLogica /></div>
                    </div> */}
            </div>
    {/* <div id="/tienda"> SEGUNDA PAGINA TIENDA ONLINE  */}


    {/* <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>CARNE VACUNA</div>
    <CarneVacuna />
    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>CARNE DE CERDO</div>
    <CarneCerdo />
    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>ACHURAS</div>
    <Achuras />
    <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>QUESOS Y EMBUTIDOS</div>
    <Quesos /> */}
    {/* <div className='bg-red-800 my-5 py-3 text-center text-white text-4xl'>PRODUCTOS GOURMET</div>
    <Gourmet /> */}
    <div id='carrito'><ShoppingCartLogica/></div>
    {/* </div> */}
    </>
  )
}

export default Tienda