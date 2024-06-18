import { Component, OnInit, ViewChild } from '@angular/core';
import { PartidoService } from '../../_service/partido.service';
import { MatTableDataSource } from '@angular/material/table';
import { Partido } from '../../_model/partido';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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

  constructor(private partidoService: PartidoService) { }

  ngOnInit(): void {
    this.partidoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
