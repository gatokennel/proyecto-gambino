

const Card = ({title,imageSource,parrafo}) => {
  return (
    <figure class ="drop-shadow-lg">
      
        <img className = "h-40 w-screen object-cover"
            src={imageSource} alt = "cualquiera"/>
            <button type="button" className= "absolute bottom-0 right-2 text-white bg-[#000000] hover:bg-[#24292F]/90 focus:ring-6 focus:outline-none focus:ring-[#24292F]/30 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 transform transition-all hover:scale-110 duration-700">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 lg:h-6 w-6 px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg> */}
                  Ver Más
                </button>
        
        <figcaption class="absolute bottom-0 z-90 w-2/3 h-1/2 bg-black/50 px-5 pb-2 text-white">
          
            <h1 class="text-xl font-bold">{title}</h1>
            <p class="mt-1 italic text-md font-light">{parrafo}</p>
        </figcaption>
        
        
    </figure>
  )
}


export default Card