import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import {Restaurante} from '../models/restaurante';
import { RestauranteService } from '../../services/restaurante.service';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  formGroup: FormGroup;
  restaurante: Restaurante;
  constructor(private _restauranteService: RestauranteService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  agregar() {
    console.log(this.restaurante);
    console.log(this.formGroup);

    this.restaurante = this.formGroup.value;
    this._restauranteService.post(this.restaurante).subscribe(p => {
      if (p != null) {
        this.restaurante = p;
        alert('Guardado Correctamente');
      } else {
        alert('Error');

      }
    });
  }
  private buildForm() {

    this.restaurante = new Restaurante();
    this.restaurante.nit = '';
    this.restaurante.nombreRestaurante = '';
    this.restaurante.identificacionDueno = '';
    this.restaurante.nombre = '';
    this.restaurante.apellido = '';
    this.restaurante.direccion = '';
    this.formGroup = this.formBuilder.group({

      nit: [this.restaurante.nit, Validators.required],
      identificacionDueno: [this.restaurante.identificacionDueno, Validators.required],
      nombre: [this.restaurante.nombre, Validators.required],
      nombreRestaurante: [this.restaurante.nombreRestaurante, Validators.required],
      apellido: [this.restaurante.apellido, Validators.required],
      direccion: [this.restaurante.direccion, Validators.required]
    });
    }
    get control() {
      return this.formGroup.controls;
    }
    onSubmit() {
      if (this.formGroup.invalid) {
      return;
      }
      this.agregar();
      }
}
