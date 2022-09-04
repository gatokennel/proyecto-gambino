

import {useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const MenuDesplegable = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu)
    };
    const NAV_ITEM_DESPLEGABLE = "font-bold text-white block px-4 py-2 text-lg hover:scale-105 hover:transition-transform"
    return (
        
            <div className="relative inline-block text-left">
                
                <button 
                onClick={handleClick}>
                <AiOutlineMenu/>
                </button>
                
                {showMenu && (<div className="origin-left absolute mt-5 w-screen h-96 rounded-lg bg-black/50 flex flex-col justify-around">
                    <a href="/" 
                    className={NAV_ITEM_DESPLEGABLE} >Quiénes Somos</a>
                    <a href="/" 
                    className={NAV_ITEM_DESPLEGABLE}>Como Comprar</a>
                    <a href="/" 
                    className={NAV_ITEM_DESPLEGABLE}>Destacados</a>
                    <a href="/" 
                    className={NAV_ITEM_DESPLEGABLE}>Tienda Online</a>
                    <a href="/" 
                    className={NAV_ITEM_DESPLEGABLE}>Contacto</a>
                </div>) }
            </div>
        
    )
}

export default MenuDesplegable