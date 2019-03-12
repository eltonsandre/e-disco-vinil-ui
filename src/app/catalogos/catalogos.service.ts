import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap, delay, catchError, retry } from 'rxjs/operators';
import { Disco, GeneroEnum } from '../core/model';


export class DiscoFiltro {
  nome: string;
  genero: GeneroEnum;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(private http: HttpClient) { }

  /**
   * @param {DiscoFiltro} filtro
   * @returns {Observable<any>}
   * @memberof CatalogosService
   */
  pesquisar(filtro: DiscoFiltro): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }
    if (filtro.genero) {
      params = params.append('genero', filtro.genero.toString());
    }

    return this.http.get<any>('http://localhost:8080/catalogo?', { params })
      .pipe( // tap(console.log)
        map(response => {
          return { discos: response.content, total: response.totalElements };
        }),
        catchError((response) => {
          console.error('Erro ao pesquisar o disco', response);
          return Observable.throw(response);
        })
      );
  }






}
