// BuscarBancoPorCodigo.js
import React, { useState } from 'react';

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
      console.error('Erro ao buscar banco:', error);
      setBanco(null);
      setErro('Erro ao buscar banco');
    }
  };

  return (
    <div>
      <h2>Buscar Banco por Código</h2>
      {/* Formulário para buscar banco por código */}
      <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
      <button onClick={buscarBanco}>Buscar</button>
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
