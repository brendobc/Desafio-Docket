package com.docket.cartorio.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.docket.cartorio.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>  {
	
	public Optional<Usuario> findByCpf(String cpf);
	public Optional<Usuario> findByNome(String nome);
}
