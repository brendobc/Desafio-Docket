import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Certidao } from '../model/Certidao';
import { AlertaService } from '../service/alerta.service';
import { CertidaoService } from '../service/certidao.service';

@Component({
  selector: 'app-delete-certidao',
  templateUrl: './delete-certidao.component.html',
  styleUrls: ['./delete-certidao.component.css']
})
export class DeleteCertidaoComponent implements OnInit {

  certidao: Certidao = new Certidao()

  idCertidao: number

  constructor(
    private certidaoService: CertidaoService,
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
    
    this.idCertidao = this.route.snapshot.params['id']
    this.findByIdCertidao(this.idCertidao)
  }

  findByIdCertidao(id: number) {
    this.certidaoService.getByIdCertidao(id).subscribe((resp: Certidao) => {
      this.certidao = resp
    })
  }

  btnSim() {
    this.certidaoService.deleteCertidao(this.idCertidao).subscribe((resp: Certidao) => {
      this.certidao = resp
      this.alert.showAlertSuccess('Certidão deletada com sucesso!')
      this.router.navigate(['/certidao'])
    })
  }

  btnNao() {
    this.router.navigate(['/certidao'])
  }

}
