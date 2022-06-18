import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/lista-acolhedores/lista-acolhedores.component';
import { TutorialDetailsComponent } from './components/dados-acolhedor/dados-acolhedor.component';
import { AddTutorialComponent } from './components/add-acolhedor/add-acolhedor.component';
import { TelaInicialComponent } from './components/tela-inicial.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: TelaInicialComponent },
  { path: 'acolhedores', component: TutorialsListComponent },
  { path: 'acolhedores/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
