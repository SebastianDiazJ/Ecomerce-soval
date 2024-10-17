import React from 'react'
import Portada from "../../images/inicio.jpg";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export const Inicio  = () => {
  return (
    <div className="inicio">
     <Link to="/">
     <h1>Inicio</h1>
     </Link>
     <Link to="/productos">
     <h1>Productos</h1>
     </Link>
     <h1>BIENVENIDOS A SOVAL</h1>
     <img src={Portada} alt="Inicio"/>
     <Footer>
      
      </Footer>
    </div>

  )
}