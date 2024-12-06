import React, { useContext, useEffect } from "react";
import { DataContext } from "../../componentes/context/Dataprovider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;

  const tooglefalse = () => {
    setMenu(false);
  };

  // Calcula el total usando la lógica para docenas y unidades adicionales
  const calcularTotal = () => {
    return carrito.reduce((acc, item) => {
      if (item.cantidad >= 12) {
        const docenas = Math.floor(item.cantidad / 12); // Número de docenas completas
        const unidadesSobrantes = item.cantidad % 12; // Unidades adicionales
        return (
          acc +
          docenas * item.priceWholesale + // Precio por las docenas completas
          unidadesSobrantes * item.priceUnit // Precio por las unidades adicionales
        );
      } else {
        return acc + item.cantidad * item.priceUnit; // Si no alcanza la docena, cobra por unidad
      }
    }, 0);
  };

  // Resta unidades
  const resta = (id) => {
    const newCarrito = carrito.map((item) => {
      if (item.id === id) {
        return { ...item, cantidad: item.cantidad === 1 ? 1 : item.cantidad - 1 };
      }
      return item;
    });
    setCarrito(newCarrito);
  };

  // Suma unidades
  const suma = (id) => {
    const newCarrito = carrito.map((item) => {
      if (item.id === id) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCarrito(newCarrito);
  };

  // Elimina productos del carrito
  const removeProducto = (id) => {
    if (window.confirm("¿Quieres eliminar el producto?")) {
      const newCarrito = carrito.filter((item) => item.id !== id);
      setCarrito(newCarrito);
    }
  };

  // Envía el carrito a WhatsApp
  const enviarCarritoWhatsApp = () => {
    const mensaje = carrito
      .map((item) => {
        if (item.cantidad >= 12) {
          const docenas = Math.floor(item.cantidad / 12);
          const unidadesSobrantes = item.cantidad % 12;
          const precioDocenas = docenas * item.priceWholesale;
          const precioUnidades = unidadesSobrantes * item.priceUnit;
          return `${item.cantidad}x ${item.title} - ${docenas} docena(s) ($${precioDocenas}) + ${unidadesSobrantes} unidad(es) ($${precioUnidades})`;
        } else {
          const precio = item.cantidad * item.priceUnit;
          return `${item.cantidad}x ${item.title} - $${precio}`;
        }
      })
      .join("\n");

    const total = calcularTotal();
    const numeroWhatsApp = "3017104942"; // Número de WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      `Pedido:\n${mensaje}\n\nTotal: $${total}`
    )}`;

    window.open(url, "_blank");
  };

  // Cargar carrito guardado en localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoGuardado) {
      setCarrito(carritoGuardado);
    }
  }, []);

  // Guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>

        <div className="carrito__center">
          {carrito.length === 0 ? (
            <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Carrito Vacio</h2>
          ) : (
            carrito.map((producto) => {
              const docenas = Math.floor(producto.cantidad / 12);
              const unidadesSobrantes = producto.cantidad % 12;
              const precio =
                producto.cantidad >= 12
                  ? docenas * producto.priceWholesale +
                    unidadesSobrantes * producto.priceUnit
                  : producto.cantidad * producto.priceUnit;

              return (
                <div className="carrito__item" key={producto.id}>
                  <img src={producto.image} alt="" />
                  <div>
                    <h3>{producto.title}</h3>
                    <p className="price">
                      Precio actual: ${precio}{" "}
                      <span style={{ fontSize: "0.8rem" }}>
                        ({producto.cantidad >= 12 ? "Mayorista" : "Unidad"})
                      </span>
                    </p>
                  </div>
                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => suma(producto.id)}
                    ></box-icon>
                    <p className="cantidad">{producto.cantidad}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => resta(producto.id)}
                    ></box-icon>
                  </div>
                  <div
                    className="remove__item"
                    onClick={() => removeProducto(producto.id)}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="carrito__footer">
          <h3>Total: ${calcularTotal()}</h3>
          <button className="btn" onClick={enviarCarritoWhatsApp}>
            HAZ TU PEDIDO AQUI
          </button>
        </div>
      </div>
    </div>
  );
};
