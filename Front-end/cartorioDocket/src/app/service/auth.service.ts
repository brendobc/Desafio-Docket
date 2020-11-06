import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:8080/usuario/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario) {
    return this.http.post('http://localhost:8080/usuario/cadastrar', usuario)
  }

  authLogin() {
    let ok = false
    let token = environment.token

    if(token != '') {
      ok = true
    }

    return ok
  }

  sair() {
    environment.token = ''
  }
}
