// BuscarBancoPorCodigo.js
import React, { useState } from 'react';
import styles from './BuscarBancoPorCodigo.module.css'

const BuscarBancoPorCodigo = () => {
  const [codigo, setCodigo] = useState('');
  const [banco, setBanco] = useState(null);
  const [erro, setErro] = useState('');

  const buscarBanco = async () => {
    try {
      const response = await fetch(`http://localhost:8080/bancos/mostrar/${codigo}`);
      if (response.ok) {
        const data = await response.json();
        setBanco(data);
        setErro('');
      } else {
        setBanco(null);
        setErro('Banco não encontrado');
      }
    } catch (error) {
      console.error('Banco não encontrado:', error);
      setBanco(null);
      setErro('Banco não encontrado');
    }
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.titulo}>Buscar Banco por Código</h2>
      {/* Formulário para buscar banco por código */}
      <input className={styles.input} type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
      <button className={styles.button} onClick={buscarBanco}>Buscar</button>
      {/* Exibir banco encontrado ou mensagem de erro */}
      {banco && (
        <div>
          <p>Código: {banco.codigoDeCompensacao}</p>
          <p>Nome: {banco.nomeInstituicao}</p>
        </div>
      )}
      {erro && <p>{erro}</p>}
    </div>
  );
};

export default BuscarBancoPorCodigo;
