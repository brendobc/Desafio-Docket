import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cartorio } from '../model/Cartorio';
import { Certidao } from '../model/Certidao';
import { AlertaService } from '../service/alerta.service';
import { CartorioService } from '../service/cartorio.service';

@Component({
  selector: 'app-info-cartorio',
  templateUrl: './info-cartorio.component.html',
  styleUrls: ['./info-cartorio.component.css']
})
export class InfoCartorioComponent implements OnInit {

  cartorio: Cartorio = new Cartorio()

  idCartorio: number
  cartorioEmissor: string
  listaByCartorioCertidoes: Certidao[]

  constructor(
    private cartorioService: CartorioService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if(environment.token == '') {
      this.alert.showAlertInfo("Você precisa estar logado para acessar")
      this.router.navigate(["/home"])
    }

    this.idCartorio = this.route.snapshot.params['id']
    this.findByIdCartorio(this.idCartorio)
  }

  findByIdCartorio(id: number) {
    this.cartorioService.getByIdCartorio(id).subscribe((resp: Cartorio) => {
      this.cartorio = resp
      this.cartorioEmissor = resp.nome
      this.listaByCartorioCertidoes = resp.certidao.reverse()
    })
  }

}
