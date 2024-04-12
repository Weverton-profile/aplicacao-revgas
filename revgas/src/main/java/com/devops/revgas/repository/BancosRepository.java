package com.devops.revgas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devops.revgas.model.Bancos;

public interface BancosRepository extends JpaRepository<Bancos, Long>{

    Bancos findByCodigoDeCompensacao(Long codigoDeCompensacao);
}
