import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/lista-acolhedores/lista-acolhedores.component';
import { TutorialDetailsComponent } from './components/dados-acolhedor/dados-acolhedor.component';
import { AddTutorialComponent } from './components/add-acolhedor/add-acolhedor.component';

const routes: Routes = [
  { path: '', redirectTo: 'acolhedores', pathMatch: 'full' },
  { path: 'acolhedores', component: TutorialsListComponent },
  { path: 'acolhedores/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
