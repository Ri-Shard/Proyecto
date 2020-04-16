import { RegistroComponent } from './perfil/registro/registro.component';
import { ConsultaComponent } from './perfil/consulta/consulta.component';
import { RestauranteComponent } from './perfil/restaurante/restaurante.component';
import { ManipuladorComponent } from './perfil/manipulador/manipulador.component';
import { NormatividadComponent } from './info/normatividad/normatividad.component';
import { InformateComponent } from './perfil/informate/informate.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'Restaurante',
    component: RestauranteComponent
  },
  {
    path: 'Manipulador',
    component: ManipuladorComponent
  },
  {
    path: 'Informate',
    component: InformateComponent
  },
  {
    path: 'Normatividad',
    component: NormatividadComponent
  },
  {
    path: 'Consulta',
    component: ConsultaComponent
  },
  {
    path: 'Registro',
    component: RegistroComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
