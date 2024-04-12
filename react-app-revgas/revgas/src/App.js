import React from 'react';
import Header from './components/Header';
import ListarBancos from './components/ListarBancos';
import BuscarBancoPorCodigo from './components/BuscarBancoPorCodigo';
import styles from './components/App.module.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <ListarBancos />
        <BuscarBancoPorCodigo />
      </div>
    </div>
  );
};

export default App;
