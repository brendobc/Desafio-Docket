import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cartorio } from '../model/Cartorio';
import { AlertaService } from '../service/alerta.service';
import { CartorioService } from '../service/cartorio.service';

@Component({
  selector: 'app-delete-cartorio',
  templateUrl: './delete-cartorio.component.html',
  styleUrls: ['./delete-cartorio.component.css']
})
export class DeleteCartorioComponent implements OnInit {

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

  btnSim() {
    this.cartorioService.deleteCartorio(this.idCartorio).subscribe((resp: Cartorio) => {
      this.cartorio = resp
      this.alert.showAlertSuccess('Cartório deletado com sucesso!')
      this.router.navigate(['/cartorio'])
    })
  }

  btnNao() {
    this.router.navigate(['/cartorio'])
  }
}
