import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidoComponent } from './pages/partido/partido.component';
import { PartidoEdicionComponent } from './pages/partido/partido-edicion/partido-edicion.component';
import { TablaPosicionesComponent } from './pages/tabla-posiciones/tabla-posiciones.component';

const routes: Routes = [
  {
    path: 'partido', component: PartidoComponent, children: [
      { path: 'nuevo', component: PartidoEdicionComponent },
      { path: 'edicion/:id', component: PartidoEdicionComponent }
    ]
  },
  { path: 'tabla-posiciones', component: TablaPosicionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
