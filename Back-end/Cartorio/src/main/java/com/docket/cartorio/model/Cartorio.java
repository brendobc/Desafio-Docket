package com.docket.cartorio.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_cartorio")
public class Cartorio {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Size(min = 2, max = 512)
	private String nome;
	
	@Size(min = 5, max = 512)
	private String endereco;
	
	@OneToMany(mappedBy = "cartorio", cascade = CascadeType.REMOVE)	
	@JsonIgnoreProperties("cartorio")
	private List<Certidao> certidao;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public List<Certidao> getCertidao() {
		return certidao;
	}

	public void setCertidao(List<Certidao> certidao) {
		this.certidao = certidao;
	}

}
