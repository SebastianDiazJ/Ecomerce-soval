import React from "react";
import { Header } from "./componentes/header";
import 'boxicons';
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./componentes/context/Dataprovider";
import { Carrito } from "./componentes/Carrito";
import FloatingButton from "./componentes/Whastapp/FloatingButton";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Header />
      <Carrito/>
      <Paginas />
      <FloatingButton />
    </div>
    </DataProvider>
  );
}

export default App;

