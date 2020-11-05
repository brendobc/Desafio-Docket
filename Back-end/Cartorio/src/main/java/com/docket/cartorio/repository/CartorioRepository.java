package com.docket.cartorio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.docket.cartorio.model.Cartorio;

public interface CartorioRepository extends JpaRepository<Cartorio, Long>{
	public List<Cartorio> findAllByNomeContainingIgnoreCase (String nome);
}
