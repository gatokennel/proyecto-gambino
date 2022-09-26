import React from 'react'
import {BsCart4} from "react-icons/bs";
import MenuDesplegable from "./MenuDesplegable"
import header from "../images/header.jpg"
import gambino from "../images/gambino.png"
import ShoppingCartLogica from './ShoppingCartLogica';

const Header = () => {
    return (
        <div style={{backgroundImage:`url(${header})`}} id='/'
        className='w-full h-screen md:min-h-[80vh] md:mt-[100px] bg-no-repeat bg-cover bg-center'>
            <div className="w-11/12 h-[10vh] flex flex-row justify-between fixed z-50 top-6 left-6  md:hidden"> 
                    <div className="text-white text-[5vh] bg-black rounded-full p-[2vh]">
                        <MenuDesplegable/>
                    </div>
                    {/* <div className="flex text-white text-[5vh] bg-black rounded-full p-[2vh]">
                    <div><ShoppingCartLogica /></div>
                    </div> */}
            </div>
            <div className='h-screen md:min-h-[80vh] w-full flex flex-col justify-center items-center backdrop-brightness-50  '>
                <img className="mb-5 rounded-full md:hidden" 
                width="200wh" 
                src={gambino} 
                alt="logo">
                </img>
                <div className='hidden md:block border-solid border-white border-4 rounded-2xl h-min w-min'>
                        <h1 className="text-white text-center text-[10vw] md:text-9xl font-[Segoe UI] font-black p-6 pb-2 md:p-8">GAMBINO</h1>
                        <h2 className="text-white text-center text-[3vw] md:text-xl  font-[Fira Sans] font-light tracking-widest decoration-3 p-8 pt-0">CARNICERIA PREMIUM</h2>
                </div>
            </div>
        </div>
    )
}

export default Header