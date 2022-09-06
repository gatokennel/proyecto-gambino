import React from 'react'
import { BsBoxArrowInRight, BsBinoculars, BsCart4, BsCartPlus, BsCursor, BsEmojiWink } from "react-icons/bs"

const ComoComprar = () => {
    return (
        <body className="w-full bg-white-100">
         <h1 className="text-4xl p-3 text-center">\ \ \ \ \ COMO COMPRAR / / / / /</h1>
            <div className="grid grid-cols-3 gap-2 text-center place-items-center mb-10">
                
                <div className='m-5'>
                    <div className='flex justify-center m-5'>
                        <BsBoxArrowInRight className='bg-red-800 p-4 rounded-lg hover:bg-red-900 hover:rounded-lg duration-200' size={90} color={'white'} />
                    </div>
                    <h1 className='font-semibold mb-2'>PASO 1</h1>
                    <p className='text-slate-500'>Ingresas a la sección 'Tienda Online</p>
                </div>

                <div className='m-5'>
                    <div className='flex justify-center m-5'>
                        <BsBinoculars className='bg-red-800 p-4 rounded-lg hover:bg-red-900 hover:rounded-lg duration-200' size={90} color={'white'} />
                    </div>
                    <h1 className='font-semibold mb-2'>PASO 2</h1>
                    <p className='text-slate-500'>Buscá la categoría del producto que querés comprar</p>
                </div>


                <div>
                    <div className='flex justify-center m-5'>
                        <BsCart4 className='bg-red-800 p-4 rounded-lg hover:bg-red-900 hover:rounded-lg duration-200' size={90} color={'white'} />
                    </div>
                    <h1 className='font-semibold mb-2'>PASO 3</h1>
                    <p className='text-slate-500'>Agregá tu producto al carrito</p>
                </div>

                <div>
                    <div className='flex justify-center m-5'>
                        <BsCartPlus className='bg-red-800 p-4 rounded-lg hover:bg-red-900 hover:rounded-lg duration-200' size={90} color={'white'} />
                    </div>
                    <h1 className='font-semibold mb-2'>PASO 4</h1>
                    <p className='text-slate-500'>Sumá todos los productos que quieras</p>
                </div>

                <div>
                    <div className='flex justify-center m-5'>
                        <BsCursor className='bg-red-800 p-4 rounded-lg hover:bg-red-900 hover:rounded-lg duration-200' size={90} color={'white'} />
                    </div>
                    <h1 className='font-semibold mb-2'>PASO 5</h1>
                    <p className='text-slate-500'>Clickeá en 'COMPRAR' y finalizá tu compra</p>
                </div>

                <div>
                    <div className='flex justify-center m-5'>
                        <BsEmojiWink className='bg-red-800 p-4 rounded-lg hover:bg-red-900 hover:rounded-lg duration-200' size={90} color={'white'} />
                    </div>
                    <h1 className='font-semibold mb-2'>PASO 6</h1>
                    <p className='text-slate-500'>¡ Que lo disfrutes !</p>
                </div>
            </div>
        </body>
    )
}

export default ComoComprar