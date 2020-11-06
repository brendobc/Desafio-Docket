import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cartorio } from '../model/Cartorio';
import { Certidao } from '../model/Certidao';
import { Usuario } from '../model/Usuario';
import { AlertaService } from '../service/alerta.service';
import { CartorioService } from '../service/cartorio.service';
import { CertidaoService } from '../service/certidao.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-certidao',
  templateUrl: './certidao.component.html',
  styleUrls: ['./certidao.component.css']
})
export class CertidaoComponent implements OnInit {

  certidao: Certidao = new Certidao()
  cartorio: Cartorio = new Cartorio()
  usuario: Usuario = new Usuario()

  listaCertidoes: Certidao[]
  listaCartorios: Cartorio[]

  certidaoNome: string
  idCartorio: number

  constructor(
    private certidaoService: CertidaoService,
    private cartorioService: CartorioService,
    private usuarioService: UsuarioService,
    private router: Router,
    private alert: AlertaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      this.alert.showAlertInfo("Você precisa estar logado para acessar")
      this.router.navigate(["/home"])
    }
    
    this.getAllCertidoes()
    this.getAllCartorios()
    this.findByIdUsuario()
  }

  findByIdCartorio() {
    this.cartorioService.getByIdCartorio(this.idCartorio).subscribe((resp: Cartorio) => {
      this.cartorio = resp
    })
  }

  findByIdUsuario() {
    this.usuarioService.getByIdUsuario(environment.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  getAllCartorios() {
    this.cartorioService.getAllCartorios().subscribe((resp: Cartorio[]) => {
      this.listaCartorios = resp
    })
  }

  getAllCertidoes() {
    this.certidaoService.getAllCertidoes().subscribe((resp: Certidao[]) => {
      this.listaCertidoes = resp.reverse()
    })
  }

  cadastrarCertidao(){
    this.certidao.nome = this.certidaoNome
    this.certidao.cartorio = this.cartorio
    this.certidao.usuario = this.usuario
    if (this.certidao.nome != null && this.certidao.cartorio != null) {
        this.certidaoService.postCertidao(this.certidao).subscribe((resp: Certidao) => {
          this.certidao = resp
          this.certidao = new Certidao()
          this.certidaoNome = ''
          this.alert.showAlertSuccess('Certidão cadastrada com sucesso!')
          this.ngOnInit()
        })
    } else {
      this.alert.showAlertDanger("Preencha os campos corretamente!")
    }
  }

}
