import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../_model/partido';
import { FormControl, FormGroup } from '@angular/forms';
import { PartidoService } from '../../../_service/partido.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-partido-edicion',
  templateUrl: './partido-edicion.component.html',
  styleUrl: './partido-edicion.component.css'
})
export class PartidoEdicionComponent implements OnInit {

  id!: number;
  partido!: Partido;
  form!: FormGroup;
  edicion: boolean = false;

  constructor(private partidoService: PartidoService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.partido = new Partido();

    this.form = new FormGroup({
      'id': new FormControl(0),
      'eqpA': new FormControl(0),
      'eqpB': new FormControl(0),
      'eqpV': new FormControl(0),
      'golA': new FormControl(0),
      'golB': new FormControl(0),
      'puntosA': new FormControl(0),
      'puntosB': new FormControl(0),
      'observacion': new FormControl(''),
      'estado': new FormControl(0),
      'createBy': new FormControl('')
    });

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    if (this.edicion) {
      this.partidoService.listarPorId(this.id).subscribe(data => {
        let id = data.id;
        let eqpA = data.eqpA;
        let eqpB = data.eqpB;
        let eqpV = data.eqpV;
        let golA = data.golA;
        let golB = data.golB;
        let puntosA = data.puntosA;
        let puntosB = data.puntosB;
        let observacion = data.observacion;
        let estado = data.estado;
        let createBy = data.createBy;

        this.form = new FormGroup({
          'id': new FormControl(id),
          'eqpA': new FormControl(eqpA),
          'eqpB': new FormControl(eqpB),
          'eqpV': new FormControl(eqpV),
          'golA': new FormControl(golA),
          'golB': new FormControl(golB),
          'puntosA': new FormControl(puntosA),
          'puntosB': new FormControl(puntosB),
          'observacion': new FormControl(observacion),
          'estado': new FormControl(estado),
          'createBy': new FormControl(createBy)
        });
      });
    }
  }

  operar() {
    this.partido.id = this.form.value['id'];
    this.partido.eqpA = this.form.value['eqpA'];
    this.partido.eqpB = this.form.value['eqpB'];
    this.partido.eqpV = this.form.value['eqpV'];
    this.partido.golA = this.form.value['golA'];
    this.partido.golB = this.form.value['golB'];
    this.partido.puntosA = this.form.value['puntosA'];
    this.partido.puntosB = this.form.value['puntosB'];
    this.partido.observacion = this.form.value['observacion'];
    this.partido.estado = this.form.value['estado'];
    this.partido.createBy = this.form.value['createBy'];

    if (this.partido != null && this.partido.id > 0) {
      this.partidoService.modificarPartido(this.partido).subscribe(data => {
        this.partidoService.listar().subscribe(partido => {
          this.partidoService.partidosCambio.next(partido);
          this.partidoService.mensaje.next("Partido modificado");
        });
      });
    } else {
      this.partidoService.registrarPartido(this.partido).subscribe(data => {
        this.partidoService.listar().subscribe(partido => {
          this.partidoService.partidosCambio.next(partido);
          this.partidoService.mensaje.next("Partido registrado");
        });
      });
    }
    this.router.navigate(['partido']);
  }
}
