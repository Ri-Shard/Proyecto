import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import {Restaurante} from '../models/restaurante';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurante: Restaurante;
  constructor(private _restauranteService: RestauranteService) {
    this.restaurante = new Restaurante();
   }

  ngOnInit() {
    this.restaurante = new Restaurante();
  }

  agregar() {
    console.log(this.restaurante);
    this._restauranteService.post(this.restaurante).subscribe(p => {
      if (p != null) {
        this.restaurante = p;
        alert('Guardado Correctamente');
      } else {
        alert('Error');

      }
    });
  }
}
