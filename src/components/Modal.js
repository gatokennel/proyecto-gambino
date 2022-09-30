import React from 'react'
import { useState } from "react";


function Modal() {
    const [showModal, setShowModal] = useState(false);
  
    function handleModal() {
      setShowModal(!showModal);
    }
    return (
      <div className="App">
        {!showModal && 
          <button onClick={handleModal} id= "modal-component-container" class="flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium
          text-white shadow-sm hover:bg-green-800 "> Finalizar Compra
          </button>}
          {showModal && (
            <div id="modal-component-container  " class="fixed inset-0 z-50 "> 
              <div class = "modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" >
                <div class="modal-bg-container fixed inset-0 bg-gray-900 bg-opacity-75">
                </div>
                <div class="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen">
                </div>
                <div id="modal-container" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all
                sm:my-8 sm:align-middle sm:max-w-lg w-full">
                  <div class="modal-wraper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="modal-wraper-flex sm:flex sm:items-start"> 
                      <div class="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-12 sm:w-12">
                        <svg class="w-12 h-12 text-green-800 fill-current"xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                          <path d="M23.95 38.35q.55 0 .95-.425.4-.425.4-.975v-1.2q3-.35 4.725-2.025 1.725-1.675 1.725-4.275 0-2.6-1.425-4.15-1.425-1.55-4.925-2.7-3.15-1.05-4.325-2.075Q19.9 19.5 19.9 17.85q0-1.55
                          1.125-2.425 1.125-.875 3.075-.875 1.2 0 2.15.45t1.65 1.35q.35.4.85.55.5.15.95-.1.55-.25.725-.8.175-.55-.175-1-.85-1.2-2.075-1.9t-2.775-.85v-1.2q0-.55-.4-.95-.4-.4-.95-.4-.55 0-.975.4-.425.4-.425.95v1.2q-2.55.35-4.025 
                          1.85-1.475 1.5-1.475 3.75 0 2.45 1.275 3.9Q19.7 23.2 23.15 24.5q3.55 1.35 4.7 2.35 1.15 1 1.15 2.6 0 1.65-1.35 2.775t-3.3 1.125q-1.65 0-3.025-.8T19.2 30.3q-.25-.4-.675-.625-.425-.225-.875-.075-.65.25-.875.775-.225.525.125 1.075 1
                          1.65 2.375 2.675t3.275 1.525V37q0 .55.425.95.425.4.975.4ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2
                          9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Z"/>
                        </svg>
                      </div>
                        <div class="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                          <div class="modal-text mt-2">
                          <p class='text-black text-md'>
                          Confirmar la Compra?
                          </p>
                          </div>
                        </div>
                    </div>
                    <div class="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <div>
                        <button onClick={handleModal} id="close-modal"class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md px-4 py-2 bg-green-800 font-medium text-white focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-green-800 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        SI
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
      </div>
    );
  }
  

export default Modal




