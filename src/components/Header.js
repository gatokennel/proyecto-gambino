import React from 'react'
import {BsCart4} from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai";
import header from "../images/header.jpg"
import gambino from "../images/gambino.png"

const Header = () => {
    return (
        <div style={{backgroundImage:`url(${header})`}} className='w-full h-screen md:min-h-[80vh] md:mt-[100px] bg-no-repeat bg-center bg-cover'>
            <div className='h-screen md:min-h-[80vh] w-full flex flex-col justify-center items-center backdrop-brightness-50  '>
                <div className="fixed top-5 left-5 right-0 flex flex-row space-x-5 md:hidden">
                    <div className="flex text-white text-[6vh] bg-black rounded-full p-[2vh]"><a href="/"><AiOutlineMenu/></a></div>
                    <div className="flex text-white text-[6vh] bg-black rounded-full p-[2vh]"><a href="/"><BsCart4/></a></div>
                </div>
                <img className="mb-10 rounded-full md:hidden" width="200" height="200"  src={gambino} alt="logo"></img>
                <div className='hidden md:block border-solid border-white border-4 rounded-2xl h-min w-min'>
                        <h1 className="text-white text-center text-[10vw] md:text-9xl font-[Segoe UI] font-black p-6 pb-2 md:p-8">GAMBINO</h1>
                        <h2 className="text-white text-center text-[3vw] md:text-xl  font-[Fira Sans] font-light tracking-widest decoration-3 p-8 pt-0">CARNICERIA PREMIUM</h2>
                </div>
            </div>
        </div>
    )
}

export default Header