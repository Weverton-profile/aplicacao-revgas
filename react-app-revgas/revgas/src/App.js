import React from 'react';
import Header from './components/Header';
import ListarBancos from './components/ListarBancos';
import BuscarBancoPorCodigo from './components/BuscarBancoPorCodigo';

const App = () => {
  return (
    <div>
      <Header />
      <ListarBancos />
      <BuscarBancoPorCodigo />
    </div>
  );
};

export default App;
