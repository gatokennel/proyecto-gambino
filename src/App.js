

import './App.css';
import QuienesSomos from './components/QuienesSomos';
import Carrusel from './components/Carrusel'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Featured from './components/Featured'
import Modal from './components/Modal';
import ComoComprar from './components/ComoComprar';
import Contact from './components/Contact';
import Tienda from './components/Tienda';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartLogica from './components/ShoppingCartLogica';


function App() {



  return (

    <>

<Navigation/>
      <Header/>
    <QuienesSomos />
    <ShoppingCart/>
    <ShoppingCartLogica/>
    <Modal/>
    <Featured/>
    <Carrusel />
    <ComoComprar />
    <Contact />

    </>
  );
}

export default App;
