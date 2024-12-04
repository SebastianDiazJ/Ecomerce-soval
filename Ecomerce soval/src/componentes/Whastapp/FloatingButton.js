import React from "react";


const FloatingButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/3017104942", "_blank"); // Número de WhatsApp
  };

  return (
    <div className="floating-button-container" onClick={handleClick}>
      <div className="floating-button">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </div>
      <span className="floating-message">Escríbenos</span>
    </div>
  );
};

export default FloatingButton;

