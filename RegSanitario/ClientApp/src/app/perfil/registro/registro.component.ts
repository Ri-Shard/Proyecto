import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import {Restaurante} from '../models/restaurante';
import { RestauranteService } from '../../services/restaurante.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  restaurante : Restaurante;
  constructor(private _restauranteService : RestauranteService) {
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
      }else{
        alert('Error Campos Vacios');

      }
    });
  }
  showr(){
    document.getElementById('formrest').style.display = 'block';
    document.getElementById('formman').style.display = 'none';

  }
  showm(){
    document.getElementById('formman').style.display = 'block';
    document.getElementById('formrest').style.display = 'none';

  }
}

  