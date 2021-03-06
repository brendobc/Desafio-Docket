package com.docket.cartorio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.docket.cartorio.model.Certidao;
import com.docket.cartorio.repository.CertidaoRepository;

@RestController
@RequestMapping("/certidao")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CertidaoController {

	@Autowired
	private CertidaoRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Certidao>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Certidao> getById(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build()); 
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Certidao>> getByNome(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@PostMapping
	public ResponseEntity<Certidao> post (@RequestBody Certidao certidao){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(certidao));
	}
	
	@PutMapping
	public ResponseEntity<Certidao> put (@RequestBody Certidao certidao){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(certidao));
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id){
		repository.deleteById(id);
	}	


}
