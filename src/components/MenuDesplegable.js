

import {useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const MenuDesplegable = () => {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions)
    };
    const NAV_ITEM_DESPLEGABLE = "font-bold text-white block px-4 py-2 text-sm hover:scale-105 hover:transition-transform"
    return (
        
            <div className="relative inline-block text-left">
                
                    <button 
                    onClick={handleClick}
                    className="p-0"
                    type="button"
                    id="menu-button" 
                    aria-expanded="true" 
                    aria-haspopup="true">
                    <AiOutlineMenu/>
                    </button>
                
                {showOptions && (<div className="origin-top-left absolute left-3 mt-5 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="bg-black rounded-md border-2 border-white">
                        <a href="/" 
                        className={NAV_ITEM_DESPLEGABLE} 
                        role="menuitem" 
                        tabindex="-1" 
                        id="menu-item-0">Quiene Somos</a>
                        <a href="/" 
                        className={NAV_ITEM_DESPLEGABLE} 
                        role="menuitem" 
                        tabindex="-1" 
                        id="menu-item-1">Destacados</a>
                        <a href="/" 
                        className={NAV_ITEM_DESPLEGABLE} 
                        role="menuitem" 
                        tabindex="-1" 
                        id="menu-item-2">Tienda Online</a>
                    </div>
                </div>) }
            </div>
        
    )
}

export default MenuDesplegable