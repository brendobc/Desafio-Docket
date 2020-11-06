import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  usuarioCpf: string
  usuarioSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  entrar() {
    this.usuarioLogin.cpf = this.usuarioCpf
    this.usuarioLogin.senha = this.usuarioSenha
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      environment.token = resp.token
      environment.idUsuario = resp.id
      this.router.navigate(['/cartorio'])
    })
  }

}
