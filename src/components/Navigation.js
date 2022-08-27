

import React from 'react'
import {BsCart4} from "react-icons/bs";
import gambino from "../images/gambino.png"


const Navigation = () => {
    const NAV_ITEM = "block mt-4 md:inline-block md:mt-0 text-white hover:scale-105 hover:transition-transform"

    return (
    <nav className="hidden md:flex fixed min-h-[15vh] z-50 top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-black">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="object-cover ml-4 rounded-full" 
            width="100" 
            height="100"  
            src={gambino} 
            alt="logo">
            </img>
        </div>
        <div id='menu' 
        className="block w-full flex-grow md:flex md:items-center md:w-auto font-bold">
            <div className="flex text-lg md:flex-grow justify-center space-x-20">
                <a href="#responsive-header" className={NAV_ITEM}>Quienes Somos</a>
                <a href="#responsive-header" className={NAV_ITEM}>Destacados</a>
                <a href="#responsive-header" className={NAV_ITEM}>Tienda Online</a>
            </div>
            <div style={{color: "white", fontSize:"6vh", marginRight:"25px"}}>
                <a href="#responsive-header"><BsCart4/></a>
            </div>
        </div>
    </nav>
    )
}

export default Navigation