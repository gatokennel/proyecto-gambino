

import './App.css';
import QuienesSomos from './components/QuienesSomos';
import Carrusel from './components/Carrusel'
import Tienda from './components/Tienda';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Modal from './components/Modal';
import Destacados from "./components/Destacados"

function App() {



  return (

    <>

<Navigation/>
      <Header/>
    <QuienesSomos />
    <Destacados/>
    <Carrusel />
    <Modal/>



    <div className='bg-blue-800 my-5 py-3 text-center text-white text-4xl'> SEGUNDA PAGINA TIENDA ONLINE </div>
    <Tienda />
    </>
  );
}

export default App;
