import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAcolhedorComponent } from './components/lista-acolhedor/lista-acolhedor.component';
import { DadosAcolhedorComponent } from './components/dados-acolhedor/dados-acolhedor.component';
import { AddAcolhedorComponent } from './components/add-acolhedor/add-acolhedor.component';

const routes: Routes = [
  { path: '', redirectTo: 'acolhedores', pathMatch: 'full' },
  { path: 'acolhedores', component: ListaAcolhedorComponent },
  { path: 'acolhedores/:id', component: DadosAcolhedorComponent },
  { path: 'add', component: AddAcolhedorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
