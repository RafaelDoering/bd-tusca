import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AddModalidadeComponent } from './pages/add-modalidade/add-modalidade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-modalidade', component: AddModalidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
