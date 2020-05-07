import { Component, OnInit } from '@angular/core';
import { Restaurante } from './.././../perfil/models/restaurante';
import { RestauranteService } from '../../services/restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  restaurantes: Restaurante[];
  restaurante: Restaurante;
  searchText: string;
  constructor(private _restauranteService: RestauranteService,
    private router: Router
    ) { }

  ngOnInit() {
    this._restauranteService.get().subscribe(c => {
      this.restaurantes = c;
    });
  }

  show() {
    document.getElementById('form1').style.display = 'block';

  }
}
