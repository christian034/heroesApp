//@Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//rxjs @Angular
import { catchError, map, Observable, of } from 'rxjs';
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

  //En los siguientes codigos se agrega, actualiza y elimina un heroe o personaje de la base de datos

   addHero( hero: Hero ): Observable<Hero> {
    return this.http.post<Hero>(`${ this.baseUrl }/heroes`, hero);
  }

  updateHero( hero: Hero ): Observable<Hero> {
    if( !hero.id) throw Error ('Hero id is required');
    return this.http.patch<Hero>(`${ this.baseUrl }/heroes/${ hero.id }`, hero);
  }

  deleteHeroById( id:string ):Observable<boolean> {
    return this.http.delete(`${ this.baseUrl }/heroes/${ id }`)
     .pipe(
        map( resp => true),
        catchError( error => of(false) ),
      );
  }
}
