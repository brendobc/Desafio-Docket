import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CartorioComponent } from './cartorio/cartorio.component';
import { CertidaoComponent } from './certidao/certidao.component';
import { DeleteCartorioComponent } from './delete-cartorio/delete-cartorio.component';
import { DeleteCertidaoComponent } from './delete-certidao/delete-certidao.component';
import { HomeComponent } from './home/home.component';
import { InfoCartorioComponent } from './info-cartorio/info-cartorio.component';
import { PutCartorioComponent } from './put-cartorio/put-cartorio.component';
import { PutCertidaoComponent } from './put-certidao/put-certidao.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cartorio', component: CartorioComponent },
  { path: 'certidao', component: CertidaoComponent },
  { path: 'editar-cartorio/:id', component: PutCartorioComponent },
  { path: 'apagar-cartorio/:id', component: DeleteCartorioComponent },
  { path: 'editar-certidao/:id', component: PutCertidaoComponent },
  { path: 'apagar-certidao/:id', component: DeleteCertidaoComponent },
  { path: 'info-cartorio/:id', component: InfoCartorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
