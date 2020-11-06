import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cartorio } from '../model/Cartorio';
import { AlertaService } from '../service/alerta.service';
import { CartorioService } from '../service/cartorio.service';

@Component({
  selector: 'app-put-cartorio',
  templateUrl: './put-cartorio.component.html',
  styleUrls: ['./put-cartorio.component.css']
})
export class PutCartorioComponent implements OnInit {

  cartorio: Cartorio = new Cartorio()

  idCartorio: number

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
    })
  }

  salvar() {
    this.cartorioService.putCartorio(this.cartorio).subscribe((resp: Cartorio) => {
      this.cartorio = resp
      this.router.navigate(['/cartorio'])
      this.alert.showAlertSuccess('Cartório atualizado com sucesso!')
    })
  }
}
