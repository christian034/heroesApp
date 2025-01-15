//@Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//rxjs @Angular
import { catchError, Observable, of } from 'rxjs';
//hero.interface
import { Hero } from '../interfaces/hero.interface';
//environments Base de datos
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseUrl

  constructor(private http: HttpClient) { }

  //esto es la dirección de la información que esta en la base de datos
  getHeroes():Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  //buscar un heroe por id
  getHeroById( id: string ): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  //Para la busqueda en la base de datos de los heroes
  getSuggestions( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
  }
}
