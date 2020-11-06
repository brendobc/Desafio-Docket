import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertaService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: string
  usuarioNome: string
  usuarioCpf: string
  usuarioSenha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertaService
  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value;
  }

  cadastrar() {
    this.usuario.nome = this.usuarioNome
    this.usuario.cpf = this.usuarioCpf
    this.usuario.senha = this.usuarioSenha
    if (this.usuario.nome != null && this.usuario.cpf != null && this.usuario.senha != null) {
      if (this.senha === this.usuario.senha) {
        this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
          this.router.navigate(["/home"])
          this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')
        })
      } else {
        alert("Suas senhas não conferem")
      }
    } else {
      alert("Preencha os campos corretamente!")
    }
  }

}
