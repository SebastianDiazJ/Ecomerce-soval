import React from "react";
import { Header } from "./componentes/header";
import 'boxicons';
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./componentes/context/Dataprovider";
import { Carrito } from "./componentes/Carrito";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Header />
      <Carrito/>
      <Paginas />
    </div>
    </DataProvider>
  );
}

export default App;

