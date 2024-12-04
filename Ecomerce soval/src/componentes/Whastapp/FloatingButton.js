import React from "react";
// Agregaremos estilos personalizados

const FloatingButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/3022122664', '_blank'); // número de WhatsApp
  };

  return (
    <div className="floating-button" onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </div>
  );
};

export default FloatingButton;
