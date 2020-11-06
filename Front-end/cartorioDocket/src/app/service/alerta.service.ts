import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private bsModalService: BsModalService) { }

  private showAlert(mensagemAlerta: string, corAlerta: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalRef.content.corAlerta = corAlerta
    bsModalRef.content.mensagemAlerta = mensagemAlerta
  }

  showAlertDanger(mensagemAlerta: string) {
    this.showAlert(mensagemAlerta, 'danger')
  }

  showAlertSuccess(mensagemAlerta: string) {
    this.showAlert(mensagemAlerta, 'success')
  }

  showAlertInfo(mensagemAlerta: string) {
    this.showAlert(mensagemAlerta, 'info')
  }
}
