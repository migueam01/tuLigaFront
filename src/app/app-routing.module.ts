import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidoComponent } from './pages/partido/partido.component';

const routes: Routes = [
  {path: 'partido', component: PartidoComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
