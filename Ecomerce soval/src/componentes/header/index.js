import React,{useContext} from 'react';
import Nike from "../../images/Logo.jpg";
import { Link } from "react-router-dom";
import { DataContext} from "../../componentes/context/Dataprovider";
export const Header = () => {
  const value =useContext(DataContext);
  const [menu,setMenu] = value.menu;
  const [carrito] = value.carrito
  const toogleMenu =()=>{
    setMenu(!menu)

  }


  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Nike} alt="logo" width="100"/>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link> {/* Cambia href por to */}
        </li>
        <li>
          <Link to="/productos">PRODUCTOS </Link> {/* Cambia href por to */}
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart" ></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  ) 
}
