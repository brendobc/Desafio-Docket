package com.docket.cartorio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.docket.cartorio.model.Certidao;

public interface CertidaoRepository extends JpaRepository<Certidao, Long> {
	public List<Certidao> findAllByNomeContainingIgnoreCase (String nome);
}
