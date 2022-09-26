


import { BsCart4 } from "react-icons/bs";
import gambino from "../images/gambino.png"
import React, { useState} from 'react';
import {Link} from 'react-scroll';
import ShoppingCartLogica from "./ShoppingCartLogica";


const Navigation = () => {
    const NAV_ITEM = "block mt-4 md:inline-block md:mt-0 text-white hover:scale-105 hover:transition-transform"
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    return (
        <nav className="hidden md:flex md:fixed min-h-[15vh] z-50 top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-black">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <button><Link to="/" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}><img className="object-cover ml-4 rounded-full"
                    width="100"
                    height="100"
                    src={gambino}
                    alt="logo">
                </img></Link></button>
            </div>
            <div id='menu'
                className="block w-full flex-grow md:flex md:items-center md:w-auto font-bold">
                <div className="flex text-lg md:flex-grow justify-center space-x-20">
                    <button><Link to="quienessomos" spy={true} smooth={true} offset={50} duration={500} className={NAV_ITEM} onClick={closeMenu}>Quienes Somos</Link></button>
                    <button><Link to="destacado" spy={true} smooth={true} offset={-150} duration={500}  className={NAV_ITEM}  onClick={closeMenu}>Destacados</Link></button>
                    <button><Link to="comocomprar" spy={true} smooth={true} offset={-140} duration={500}  className={NAV_ITEM} onClick={closeMenu}>Como Comprar</Link></button>
                    <a href="/tienda" className={NAV_ITEM}>Tienda Online</a>
                    <button><Link to="contacto" spy={true} smooth={true} offset={-50} duration={500}  className={NAV_ITEM} onClick={closeMenu}>Contacto</Link></button>
                </div>
                <button><Link to="/" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}><img className="object-cover mr-4 rounded-full"
                    width="100"
                    height="100"
                    src={gambino}
                    alt="logo">
                </img></Link></button>
                {/* <div style={{ color: "white", fontSize: "6vh", marginRight: "25px" }}>
                    <div><ShoppingCartLogica /></div>
                </div> */}
            </div>
        </nav>
    )
}

export default Navigation