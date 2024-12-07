import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/Dataprovider';
import { ProductoItem } from './ProductoItem';


export const ProductosLista = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  // Mostrar la alerta al montar el componente
  useEffect(() => {
    setMostrarAlerta(true);
  }, []);

  const manejarCerrarAlerta = () => {
    setMostrarAlerta(false);
  };

  return (
    <>
      <h1 className="title">PRODUCTOS</h1>

      {/* Mostrar alerta personalizada si está activada */}
      {mostrarAlerta && (
        <div className="alerta">
          <p className="alerta-texto">SOLO VENTAS AL POR MAYOR Y AL DETAL</p>
          <button 
            onClick={manejarCerrarAlerta} 
            className="alerta-boton-cerrar"
          >
            Cerrar
          </button>
        </div>
      )}

      {/* Lista de productos */}
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.priceUnit}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
    </>
  );
};
