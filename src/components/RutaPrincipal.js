import React from 'react'
import QuienesSomos from './QuienesSomos';
import Carrusel from './Carrusel'


import Header from './Header';
import Featured from './Featured';
import Modal from './Modal';
import ComoComprar from './ComoComprar';
import Navigation from './Navigation';
import Contact from './Contact';
import ShoppingCartLogica from './ShoppingCartLogica';


const RutaPrincipal = () => {
  return (
    <>
     <div id="/">
     <Navigation />
      <Header/>
    <QuienesSomos />
    <Featured/>
    <Carrusel />
    <ComoComprar />

    </div>
    </>
  )
}

export default RutaPrincipal
