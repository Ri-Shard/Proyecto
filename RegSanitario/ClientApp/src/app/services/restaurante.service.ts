import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Restaurante } from '../perfil/models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  baseUrl: string;

  constructor(
     private http: HttpClient,
     @Inject('BASE_URL') baseUrl: string,
     private handleErrorService: HandleHttpErrorService
  ) {
     this.baseUrl = baseUrl;
  }


  get(): Observable<Restaurante[]> {
     return this.http.get<Restaurante[]>(this.baseUrl + 'api/Restaurante').pipe(
        tap(_ => this.handleErrorService.log('datos recibidos')),
        catchError(this.handleErrorService.handleError<Restaurante[]>('Consulta Restaurante', null))
     );
  }

  post(restaurante: Restaurante): Observable<Restaurante> {
     return this.http.post<Restaurante>(this.baseUrl + 'api/Restaurante', restaurante).pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Restaurante>('Registrar Restaurante', null))
     );
  }

}
