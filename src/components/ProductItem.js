import { useState } from "react";
import { BsCart4 } from "react-icons/bs";


const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, description, img } = data;

  const [showModal, setShowModal] = useState(false);
  
    function handleModal() {
      setShowModal(!showModal);
    }
  return (
    <body className="bg-white-100 z-0">
      <div className='z-0'>

        <div className="transition-transform w-72 bg-white drop-shadow-md rounded-lg m-5 hover:scale-105 hover:transition-transform">
          <img className="object-cover rounded-tl-lg rounded-tr-lg w-full h-60 "
                src={img} />
          <div className="px-5 py-3 space-y-2">
            <h3 className="text-lg">{name}</h3>
            <div className="space-x-2">
              <span className="px-3 py-0.5 border border-red-600 text-[11px] text-red-600">{description}</span>
            </div>
            <p className="space-x-2">
              <span className="text-2xl font-semibold">${price}</span>
              {/* <span className="text-sm line-through text-gray-500">$1000</span> */}
              {/* <span className="text-sm text-red-700">40% off</span> */}
            </p>
            <div className="flex justify-between items-center pt-3 pb-2">
              
            {!showModal && 
          <button onClick={handleModal} id= "modal-component-container"  className="px-4 py-2 bg-red-800 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">
            Agregar al carrito 
          </button>}
          {showModal && (
            <div id="modal-component-container  " class="fixed inset-0 z-50 "> 
              <div class = "modal-flex-container flex items-end justify-center text-center sm:block sm:p-0" >
                <div class="modal-bg-container fixed inset-0 bg-gray-900 bg-opacity-75">
                </div>
                <div class="modal-space-container hidden inline-block align-middle h-screen">
                </div>
                <div id="modal-container" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all
                sm:my-8 sm:align-middle sm:max-w-lg w-full">
                  <div class="modal-wraper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="modal-wraper-flex sm:flex sm:items-start"> 
                      <div class="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-12 sm:w-12">
                        <div className='text-4xl bg-gray-800 rounded-md border border-gray-300 px-2 py-1 text-white'><BsCart4 /></div>
                      </div>
                        <div class="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                          <div class="modal-text mt-2">
                          <p class='text-black text-md'>
                          Agregar al carrito
                          </p>
                          </div>
                        </div>
                    </div>
                    <div class="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <div><button onClick={handleModal}>
                      <button onClick={() => addToCart(id)} id="close-modal"class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md px-4 py-2 bg-green-800 font-medium text-white focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-green-800 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        SI</button>
                        </button>
                        <button onClick={handleModal} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 mt-3 bg-red-800 font-medium text-white hoover:bg-gray-50
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

              <button
                className="text-4xl text-gray-300 hover:text-red-800 duration-300 active:text-red-800 focus:text-red-800">&hearts;</button>
            </div>
          </div>
        </div>

      </div>
    </body>


  )
};

export default ProductItem