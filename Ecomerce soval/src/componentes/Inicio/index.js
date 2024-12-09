import React, { useState, useEffect } from 'react';
import Portada from "../../images/inicio.jpg";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Producto1 from "../../images/img01.jpg";
import Producto2 from "../../images/img02.jpg";
import Producto3 from "../../images/img03.jpg";
import Producto4 from "../../images/img04.jpg";
import Producto5 from "../../images/img05.jpg";
import Producto6 from "../../images/img06.jpg";

export const Inicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Producto1, Producto2, Producto3, Producto4, Producto5, Producto6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="inicio">
      <header className="header">
        <h1>Bienvenidos a SOVAL</h1>
        <nav className="nav-links">
          <Link to="/" className="boton">Inicio</Link>
          <Link to="/productos" className="boton">Productos</Link>
        </nav>
      </header>

      <section className="portada">
        <img src={Portada} alt="Inicio" className="portada-img" />
      </section>

      <section className="galeria">
        <h2>Nuestros Productos</h2>
        <div className="producto-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Producto ${index + 1}`}
              className={`producto-img ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </section>

      <section className="ubicacion">
        <h2>Encuéntranos en Google Maps</h2>
        <iframe
          title="Ubicación SOVAL"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.763432762191!2d-75.57892112511942!3d6.294788993694317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f4e0c90bcb3%3A0xa26a927c98966f55!2sSoval!5e0!3m2!1ses!2sco!4v1733766494989!5m2!1ses!2sco"
          className="mapa"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};
