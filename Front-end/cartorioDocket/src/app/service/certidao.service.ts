import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Certidao } from '../model/Certidao';

@Injectable({
  providedIn: 'root'
})
export class CertidaoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCertidoes() {
    return this.http.get("http://localhost:8080/certidao", this.token)
  }

  getByIdCertidao(id: number) {
    return this.http.get(`http://localhost:8080/certidao/${id}`, this.token)
  }

  postCertidao(certidao: Certidao) {
    return this.http.post("http://localhost:8080/certidao", certidao, this.token)
  }

  putCertidao(certidao: Certidao) {
    return this.http.put("http://localhost:8080/certidao", certidao, this.token)
  }

  deleteCertidao(id: number) {
    return this.http.delete(`http://localhost:8080/certidao/${id}`, this.token)
  }
}
