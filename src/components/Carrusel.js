import React, { useState } from "react";
import vacio from '../images/vacio.jpg'
import peceto from '../images/peceto.jpg'
import matambreCerdo from '../images/matambrecerdo.jpg'
import bondiola from '../images/bondiola.jpeg'
import barbacoa from '../images/barbacoa.jpg'
import mostaza from '../images/mostaza.jpg'
import chinchulin from '../images/chinchulin.jpeg'
import chorizo from '../images/chorizo.jpeg'
import queso from '../images/quesofresco.jpg'
import salame from '../images/salamepimienta.jpg'





const Carrusel = () => {
  const slides = [vacio, peceto, matambreCerdo, bondiola, barbacoa, mostaza, chinchulin, chorizo, queso, salame]

  const slideNames = ['Vacío', 'Peceto', 'Matambre de cerdo', 'Bondiola', 'Barbacoa', 'Mostaza', 'Chinchulín', 'Chorizo', 'Queso Brie', 'Salame a la pimienta']

  const [currentIndex, setCurrentIndex] = useState(0);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    position: 'absolute',
    bottom: '0.5rem',

    color: 'white',
    transform: 'translate(-50%, -50%)'
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="w-full h-5 flex items-center justify-center bg-black">
      </div>
      <div className='w-100vw h-70vh bg-black flex justify-center relative items-center'>
      <div className='w-full h-full flex justify-center items-center m-auto'>
      <div className='h-full w-full bg-cover bg-center  flex justify-center items-center' style={{backgroundImage: `url(${slides[currentIndex]})`}}>
        <div className="w-full h-full bg-black text-white flex justify-center items-center text-2xl  bg-opacity-50 font-black">
          {slideNames[currentIndex]}
        </div>
      </div>
        <div onClick={goToPrevious} className='absolute top-1/2  left-8 text-5xl text-white z-10 cursor-pointer'>
          ❰
        </div>
        <div onClick={goToNext} className='absolute top-1/2  right-8 text-5xl text-white z-10 cursor-pointer'>
          ❱
        </div>
      <div style={dotsContainerStyles} 
      // className='flex justify-center absolute bottom-2 left-2/4 text-white'
      >
        {/* {slides.map((slide, slideIndex) => (
          <div
          style={dotStyle}
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))} */}
      </div>
        </div>
    </div>
    </div>
  );
};

export default Carrusel;
