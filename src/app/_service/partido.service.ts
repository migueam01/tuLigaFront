import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Partido } from '../_model/partido';
import { Subject } from 'rxjs';
import { TablaPosicionesDTO } from '../_model/TablaPosicionesDTO';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  partidosCambio = new Subject<Partido[]>();
  mensaje = new Subject<string>();

  url: string = `${environment.HOST_URL}/partidos`

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Partido[]>(this.url);
  }

  //pagina: la página que quiero mostrar y tam cantidad de elemento por página
  listarPaginado(pagina: number, tam: number) {
    return this.http.get<any>(`${this.url}/pageable?page=${pagina}&size=${tam}`);
  }

  listarPorId(id: number) {
    return this.http.get<Partido>(`${this.url}/${id}`);
  }

  registrarPartido(partido: Partido) {
    return this.http.post(this.url, partido);
  }

  modificarPartido(partido: Partido) {
    return this.http.put(this.url, partido);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listarTablaPosiciones() {
    return this.http.get<TablaPosicionesDTO[]>(`${this.url}/tabla_posiciones`);
  }
}
