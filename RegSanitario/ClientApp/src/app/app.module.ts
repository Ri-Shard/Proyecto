import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RestauranteComponent } from './perfil/restaurante/restaurante.component';
import { ManipuladorComponent } from './perfil/manipulador/manipulador.component';
import { RegistroComponent } from './perfil/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsultaComponent } from './perfil/consulta/consulta.component';
import { InformateComponent } from './perfil/informate/informate.component';
import { NormatividadComponent } from './info/normatividad/normatividad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RestauranteComponent,
    ManipuladorComponent,
    RegistroComponent,
    ConsultaComponent,
    InformateComponent,
    NormatividadComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
