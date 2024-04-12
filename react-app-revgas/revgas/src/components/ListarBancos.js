import React, { useState } from 'react';

const ListarBancos = () => {
  const [bancos, setBancos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [dadosCarregados, setDadosCarregados] = useState(false);

  const handleFetchBancos = async (page) => {
    try {
      const response = await fetch(`http://localhost:8080/bancos/listar?page=${page}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar bancos');
      }
      const data = await response.json();
      setBancos(data.content);
      setCurrentPage(data.pageable.pageNumber);
      setTotalPages(data.totalPages);
      setDadosCarregados(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      handleFetchBancos(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      handleFetchBancos(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Listar Bancos</h2>
      <button onClick={() => handleFetchBancos(0)}>Carregar Bancos</button>
      {dadosCarregados && (
        <div>
          <ul>
            {bancos.map((banco) => (
              <li key={banco.id}>
                {banco.codigoDeCompensacao} - {banco.nomeInstituicao}
              </li>
            ))}
          </ul>
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 0}>Página Anterior</button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Próxima Página</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListarBancos;
