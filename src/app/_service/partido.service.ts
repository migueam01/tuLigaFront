import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Partido } from '../_model/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  url: string = `${environment.HOST_URL}/partidos`
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Partido[]>(this.url);
  }
}
