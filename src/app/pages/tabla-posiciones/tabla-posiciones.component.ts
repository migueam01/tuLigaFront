import { Component } from '@angular/core';
import { TablaPosicionesDTO } from '../../_model/TablaPosicionesDTO';
import { MatTableDataSource } from '@angular/material/table';
import { PartidoService } from '../../_service/partido.service';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrl: './tabla-posiciones.component.css'
})
export class TablaPosicionesComponent {

  displayedColumns: string[] = ['equipo', 'puntos', 'partidosJugados', 'partidosGanados', 'partidosEmpatados', 'partidosPerdidos', 'golesMarcados', 'golesRecibidos', 'golDiferencia'];

  dataSource!: MatTableDataSource<TablaPosicionesDTO>;

  constructor(private partidoService: PartidoService) { }

  ngOnInit(): void {
    this.partidoService.listarTablaPosiciones().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
