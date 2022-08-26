

import React from 'react'
import {BsCart4} from "react-icons/bs";
import gambino from "../images/gambino.png"


const Navigation = () => {
    return (
    <nav className="hidden md:flex fixed min-h-[20vh] z-50 top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-[#000000]">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="object-cover ml-4 rounded-full" width="100" height="100"  src={gambino} alt="logo"></img>
        </div>
        <div className="block md:hidden">
            <button id='boton' className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div id='menu' className="w-full block flex-grow md:flex md:items-center md:w-auto font-bold">
            <div className="flex text-lg md:flex-grow justify-center space-x-20">
                <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-xl hover:tracking-widest mr-4">Quienes Somos</a>
                <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-xl hover:tracking-widest mr-4">Destacados</a>
                <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-xl hover:tracking-widest mr-4">Tienda Online</a>
            </div>
            <div style={{color: "white", fontSize:"6vh", marginRight:"25px"}}>
                <a href="#responsive-header"><BsCart4/></a>
            </div>
        </div>
    </nav>
    )
}

export default Navigation