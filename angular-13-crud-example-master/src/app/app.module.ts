import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAcolhedorComponent } from './components/add-acolhedor/add-acolhedor.component';
import { DadosAcolhedorComponent } from './components/dados-acolhedor/dados-acolhedor.component';
import { ListaAcolhedorComponent } from './components/lista-acolhedor/lista-acolhedor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAcolhedorComponent,
    DadosAcolhedorComponent,
    ListaAcolhedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
