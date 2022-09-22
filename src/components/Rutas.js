import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Featured from './Featured';
import Contact from './Contact';
import ComoComprar from './ComoComprar';
import RutaPrincipal from './RutaPrincipal';
import Tienda from './Tienda';
import RutaTienda from './RutaTienda';

const Rutas = () => {
    return (
        <>

                <Routes>
                    <Route path="/" element={<RutaPrincipal />} />
                    <Route path="tienda" element={<RutaTienda />} />
                </Routes>


        </>
    )
}

export default Rutas
