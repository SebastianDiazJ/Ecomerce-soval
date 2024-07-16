import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from "../context/Dataprovider";
import { useParams } from "react-router-dom";

export const ProductoDetalles = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState({});
    const params = useParams();

    useEffect(() => {
        if (productos.length > 0) {
            productos.forEach((producto) => {
                if (producto.id === parseInt(params.id)) {
                    setDetalle(producto);
                }
            });
        }
    }, [params.id, productos]);

    return (
        <>
            {
                detalle.title ? (
                    <div className="detalles">
                        <h2>{detalle.title}</h2>
                        <p className="price">${detalle.price}</p>
                        <img src={detalle.image} alt={detalle.title} />
                        <div classname="description"></div>
                        <p><b>decription:</b>El calzado se refiere a cualquier tipo de 
                        accesorio o prenda diseñada para proteger y cubrir los pies. El calzado puede variar 
                        ampliamente en diseño, estilo, materiales y función, y
                        es esencial para mantener la comodidad y la salud de los
                        pies mientras se realizan diversas actividades.<br/>El calzado se refiere a cualquier tipo de 
                        accesorio o prenda diseñada para proteger y cubrir los pies. El calzado puede variar 
                        ampliamente en diseño, estilo, materiales y función, y
                        es esencial para mantener la comodidad y la salud de los
                        pies mientras se realizan diversas actividades.</p>
                        <br/><br/><br/>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )
            }
        </>
    );
};
