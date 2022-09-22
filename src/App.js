

import './App.css';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rutas from './components/Rutas';
import Tienda from './components/Tienda';


function App() {






  return (

    <>
 
      <Router>
        <Routes>
          <Route path="*" element={<Rutas />} />
          <Route path="tienda" element={<Tienda />} />
        </Routes>
      </Router>

      <Contact />





    </>
  );
}

export default App;
