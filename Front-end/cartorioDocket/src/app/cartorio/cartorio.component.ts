import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cartorio } from '../model/Cartorio';
import { AlertaService } from '../service/alerta.service';
import { CartorioService } from '../service/cartorio.service';

@Component({
  selector: 'app-cartorio',
  templateUrl: './cartorio.component.html',
  styleUrls: ['./cartorio.component.css']
})
export class CartorioComponent implements OnInit {

  cartorio: Cartorio = new Cartorio()
  listaCartorios: Cartorio[]

  nomeCartorio: string
  enderecoCartorio: string

  constructor(
    private cartorioService: CartorioService,
    private router: Router,
    private alert: AlertaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      this.alert.showAlertInfo("Você precisa estar logado para acessar")
      this.router.navigate(["/home"])
    }
    
    this.getAllCartorios()
  }

  getAllCartorios() {
    this.cartorioService.getAllCartorios().subscribe((resp: Cartorio[]) => {
      this.listaCartorios = resp.reverse()
    })
  }

  cadastrarCartorio(){
    this.cartorio.nome = this.nomeCartorio
    this.cartorio.endereco = this.enderecoCartorio
    if (this.cartorio.nome != null && this.cartorio.endereco != null) {
        this.cartorioService.postCartorio(this.cartorio).subscribe((resp: Cartorio) => {
          this.cartorio = resp
          this.alert.showAlertSuccess('Cartorio cadastrado com sucesso!')
          this.ngOnInit()
        })
    } else {
      this.alert.showAlertDanger("Preencha os campos corretamente!")
    }
  }
}
