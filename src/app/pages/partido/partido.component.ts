import { Component, OnInit, ViewChild } from '@angular/core';
import { PartidoService } from '../../_service/partido.service';
import { MatTableDataSource } from '@angular/material/table';
import { Partido } from '../../_model/partido';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrl: './partido.component.css'
})
export class PartidoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'eqpA', 'eqpB', 'eqpV', 'golA', 'golB', 'puntosA', 'puntosB', 'createBy', 'acciones'];

  dataSource!: MatTableDataSource<Partido>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  cantidad: number = 0;

  constructor(private partidoService: PartidoService, private snackBar: MatSnackBar, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.partidoService.partidosCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.partidoService.mensaje.subscribe(data => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000
      });
    });

    /*this.partidoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });*/

    this.partidoService.listarPaginado(0, 1).subscribe(data => {
      this.cantidad = data.totalElements;
      this.dataSource = new MatTableDataSource(data.content);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  mostrarMas(e: any) {
    this.partidoService.listarPaginado(e.pageIndex, e.pageSize).subscribe(data => {
      this.cantidad = data.totalElements;
      this.dataSource = new MatTableDataSource(data.content);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminar(idPartido: number) {
    this.partidoService.eliminar(idPartido).subscribe(data => {
      this.partidoService.listar().subscribe(data => {
        this.partidoService.partidosCambio.next(data);
        this.partidoService.mensaje.next('Partido eliminado');
      });
    });
  }
}
