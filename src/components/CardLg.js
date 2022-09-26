



const CardLg = ({title,imageSource,price,parrafo}) => {
  return (
  <figure className="w-64  bg-red-800 xl:rounded-lg drop-shadow-lg " >
      <img className="object-cover h-[220px] xl:rounded-tl-lg xl:rounded-tr-lg" alt="Alimentos"
        src={imageSource} />
          <figcaption className="h-24 px-5 py-6 text-center text-xl font-semibold">
            <h1 className="text-white">{title}</h1>
              <p className='text-xs opacity-90 text-white'>
              {parrafo}
              </p>
          </figcaption>
              {/* <p className= "px-5 py-3 font-semibold italic lg:text-xl text-center border-t">${price} /Kg</p> */}
              <div className="px-5 py-3 text-center ">
                <button type="button" className= "text-white bg-[#000000] hover:bg-[#24292F]/90 focus:ring-6 focus:outline-none focus:ring-[#24292F]/30 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 transform transition-all hover:scale-110 duration-700">
                <a href="/tienda">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 lg:h-6 w-6 px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg> */}
                  Ver Más</a>
                </button>
              </div>
  </figure>

  )}

  export default CardLg