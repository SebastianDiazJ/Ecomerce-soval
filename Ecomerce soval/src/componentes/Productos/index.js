import React, { useContext } from 'react'
import { DataContext } from '../context/Dataprovider';
import { ProductoItem } from './ProductoItem';

export const ProductosLista = () =>{

  const value = useContext(DataContext)
  const [productos] = value.productos
  
  console.log(productos)
  return (
    <>
    <h1 className="title">PRODUCTOS </h1>
    <div className="productos">
      {
        productos.map(productos =>(
          <ProductoItem 
          key ={productos.id}
          id = {productos.id}
          title = {productos.title}
          price = {productos.priceUnit}
          image = {productos.image}
          category = {productos.category}
          cantidad = {productos.cantidad}
          />
        ))
      }
    

    </div>
    </>
  );
};

