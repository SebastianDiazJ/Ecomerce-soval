import React, { useState, useEffect, createContext } from "react";
import Data from "../../Data.js";
import { Carrito } from "../Carrito/index.js";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState(() => {
    // Recuperar carrito de localStorage al inicializar
    const savedCarrito = localStorage.getItem('dataCarrito');
    return savedCarrito ? JSON.parse(savedCarrito) : [];
});
    const[total,setTotal] = useState(0);

  // Cargar productos desde Data.js al montar el componente
  useEffect(() => {
    const productos = Data.items;
    if (productos) {
      setProductos(productos);
    } else {
      setProductos([]);
    }
  }, []);

  const addCarrito = (id) => {
    const check = carrito.every(item => item.id !== id);
    if (check) {
      const data = productos.filter(producto => producto.id === id);
      setCarrito([...carrito, ...data]);
    } else {
      alert("El producto se ha agregado al carrito");
    }
  };

  // Guardar información del carrito en memoria
  useEffect(() => {
    localStorage.setItem('dataCarrito', JSON.stringify(carrito));
  }, [carrito]);

  //suma el total de precios del carrito 
  useEffect(() => {
    const getTotal = () => {
      const total = carrito.reduce((prev, item) => {
        return prev + (item.price * item.cantidad);
      }, 0);
      return total;
    };
  
    const totalCarrito = getTotal();
   
    setTotal(totalCarrito);
  }, [carrito]);
  
  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total:[total, setTotal]
  };

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
};
