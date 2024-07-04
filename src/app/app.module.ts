import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { PartidoComponent } from './pages/partido/partido.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { PartidoEdicionComponent } from './pages/partido/partido-edicion/partido-edicion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPosicionesComponent } from './pages/tabla-posiciones/tabla-posiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    PartidoComponent,
    PartidoEdicionComponent,
    TablaPosicionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
