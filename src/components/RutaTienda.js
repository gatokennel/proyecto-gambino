import React from 'react'
import Tienda from './Tienda'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RutaTienda = () => {
  return (

      <>

                <Routes>
                    <Route path="tiendaonline" element={<Tienda />} />
                </Routes>


        </>

  )
}

export default RutaTienda
