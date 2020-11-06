import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Cartorio } from '../model/Cartorio';

@Injectable({
  providedIn: 'root'
})
export class CartorioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCartorios() {
    return this.http.get("http://localhost:8080/cartorio", this.token)
  }

  getByIdCartorio(id: number) {
    return this.http.get(`http://localhost:8080/cartorio/${id}`, this.token)
  }

  postCartorio(cartorio: Cartorio) {
    return this.http.post("http://localhost:8080/cartorio", cartorio, this.token)
  }

  putCartorio(cartorio: Cartorio) {
    return this.http.put("http://localhost:8080/cartorio", cartorio, this.token)
  }

  deleteCartorio(id: number) {
    return this.http.delete(`http://localhost:8080/cartorio/${id}`, this.token)
  }
}
