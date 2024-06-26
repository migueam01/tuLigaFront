import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidoComponent } from './pages/partido/partido.component';
import { PartidoEdicionComponent } from './pages/partido/partido-edicion/partido-edicion.component';

const routes: Routes = [
  {
    path: 'partido', component: PartidoComponent, children: [
      { path: 'nuevo', component: PartidoEdicionComponent },
      { path: 'edicion/:id', component: PartidoEdicionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
