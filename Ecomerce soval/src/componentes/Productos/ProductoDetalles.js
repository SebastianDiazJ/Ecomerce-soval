import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from "../context/Dataprovider";
import { useParams } from "react-router-dom";

export const ProductoDetalles = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    const addCarrito = value.addCarrito; // Obtenemos la función addCarrito del contexto
    const [detalle, setDetalle] = useState({});
    const [modalVisible, setModalVisible] = useState(false); // Para controlar la visibilidad del modal
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

    // Función para mostrar el modal
    const mostrarModal = () => setModalVisible(true);

    // Función para cerrar el modal
    const cerrarModal = () => setModalVisible(false);

    return (
        <>
            {
                detalle.title ? (
                    <div className="detalles">
                        {/* Contenedor de los detalles del producto */}
                        <div className="producto-detalles-contenedor">
                            {/* Imagen pequeña con clic para ampliar */}
                            <img 
                                src={detalle.image} 
                                alt={detalle.title} 
                                className="producto-imagen" 
                                onClick={mostrarModal} 
                            />

                            {/* Detalles del producto */}
                            <div className="description">
                                <h2>{detalle.title}</h2>
                                <p className="price">${detalle.price}</p>
                                <p><b>Descripción:</b> {detalle.description || "Vistete con bendicion "}</p>
                                {/* Botón de Añadir al carrito */}
                                <button className="btndetalle" onClick={() => addCarrito(detalle.id)}>
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                        
                        {/* Modal para mostrar la imagen grande */}
                        {modalVisible && (
                            <div className="modal" onClick={cerrarModal}>
                                <span className="close" onClick={cerrarModal}>&times;</span>
                                <img className="modal-content" src={detalle.image} alt={detalle.title} />
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Cargando...</p>
                )
            }
        </>
    );
};
