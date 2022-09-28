import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './pages/chat/chat.component';
import { EsteticaComponent } from './pages/estetica/estetica.component';
import { HomepComponent } from './pages/homep/homep.component';
import { HospedagemComponent } from './pages/hospedagem/hospedagem.component';
import { LoginComponent } from './pages/login/login.component';
import { LojaComponent } from './pages/loja/loja.component';

const router: Routes = [{
  path:'',
  redirectTo:'fruits/home',
  pathMatch:'full'
},
  
{ path: 'chat', component:ChatComponent },
{ path: 'estetica', component:EsteticaComponent }, 
{ path: 'homep', component:HomepComponent},
{ path: 'hospedagem', component:HospedagemComponent},
{ path: 'loja', component:LojaComponent}, 
{ path: 'login', component:LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
