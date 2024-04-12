package com.devops.revgas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devops.revgas.model.Bancos;
import com.devops.revgas.repository.BancosRepository;

@RestController
@RequestMapping("bancos")
public class BancosController {
    
    @Autowired
    private BancosRepository bancosRepository;

    @GetMapping("listar")
    public ResponseEntity<Page<Bancos>> list(@PageableDefault(size = 200) Pageable pagination) {
        Page<Bancos> page = bancosRepository.findAll(pagination);
        return ResponseEntity.ok(page);
    }

    @GetMapping("mostrar/{codigoCompensacao}")
    public ResponseEntity<Bancos> show(@PathVariable Long codigoCompensacao) {
        Bancos banco = bancosRepository.findByCodigoDeCompensacao(codigoCompensacao);
        return ResponseEntity.ok(banco);
    }
}
