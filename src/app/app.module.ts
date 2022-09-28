import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsModule } from './fruits/fruits.module';
import { HomepComponent } from './pages/homep/homep.component';
import { EsteticaComponent } from './pages/estetica/estetica.component';
import { HospedagemComponent } from './pages/hospedagem/hospedagem.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LojaComponent } from './pages/loja/loja.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepComponent,
    EsteticaComponent,
    HospedagemComponent,
    ChatComponent,
    LojaComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
