

const Card = ({title,imageSource,parrafo}) => {
  return (
    <figure class ="drop-shadow-lg">
        <img className = "h-40 w-screen object-cover"
            src={imageSource} alt = "cualquiera"/>
        
        <figcaption class="absolute bottom-0 z-90 w-1/2 h-1/2 bg-black/50 px-5 py-2 text-white">
            <h1 class="text-xl font-bold">{title}</h1>
            <p class="mt-1 italic text-sm font-light">{parrafo}</p>
        </figcaption>
    </figure>
  )
}


export default Card