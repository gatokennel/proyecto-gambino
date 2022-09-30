

import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from 'react-scroll';

const MenuDesplegableTienda = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu)
    };

    const [click, setClick] = useState(false)
    const handleeClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const NAV_ITEM_DESPLEGABLE = "w-48 font-bold text-white block px-6 py-2 text-xl bg-gray-500/20 hover:scale-105 hover:transition-transform "
    return (

        <div className="inline-block text-left  ">

            <button 
                onClick={handleClick}>
                <AiOutlineMenu />
            </button>

            {showMenu && (<div className="origin-left fixed mt-5 w-screen h-96 rounded-lg bg-black/50 flex flex-col justify-around ">
                <a href='/' spy={true} smooth={true} offset={0} duration={500}
                    className={NAV_ITEM_DESPLEGABLE} >Volver</a>
                    <Link to="/tienda" spy={true} smooth={true} offset={-50} duration={500}
                    className={NAV_ITEM_DESPLEGABLE} >Inicio</Link>
                <Link to="carrito" spy={true} smooth={true} offset={-50} duration={500}
                    className={NAV_ITEM_DESPLEGABLE} >Tienda Online</Link>
                <Link to="contacto" spy={true} smooth={true} offset={-5} duration={500} onClick={closeMenu}
                    className={NAV_ITEM_DESPLEGABLE}>Contacto</Link>
            </div>)}
        </div>

    )
}

export default MenuDesplegableTienda