import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CartorioComponent } from './cartorio/cartorio.component';
import { CertidaoComponent } from './certidao/certidao.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PutCartorioComponent } from './put-cartorio/put-cartorio.component';
import { PutCertidaoComponent } from './put-certidao/put-certidao.component';
import { DeleteCartorioComponent } from './delete-cartorio/delete-cartorio.component';
import { DeleteCertidaoComponent } from './delete-certidao/delete-certidao.component';
import { InfoCartorioComponent } from './info-cartorio/info-cartorio.component';
import { AlertaComponent } from './alerta/alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    CartorioComponent,
    CertidaoComponent,
    NavbarComponent,
    FooterComponent,
    PutCartorioComponent,
    PutCertidaoComponent,
    DeleteCartorioComponent,
    DeleteCertidaoComponent,
    InfoCartorioComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
