//@Angular
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
//interface hero search
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor( private heroesService: HeroesService ){}

  /**
  * Esta función es responsable de iniciar una búsqueda de héroes según el valor ingresado.//+
  * Recupera una lista de héroes sugeridos del `HeroesService` y actualiza la matriz `heroes`.//+
  *  * @comentarios//+
  * La función primero recupera el valor actual del FormControl `searchInput`.//+
  * Si el valor está vacío, el valor predeterminado es una cadena vacía.//+
  * Luego, llama al método `getSuggestions` del `HeroesService` con el valor de entrada.//+
  * El método `getSuggestions` devuelve un Observable de héroes al que está suscrito.//+
  * Cuando el Observable emite un nuevo valor (es decir, una lista de héroes), la matriz `héroes` se actualiza con los héroes recibidos.//+
  *///+*/
  searchHero() {
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions( value )
      .subscribe( heroes => this.heroes = heroes );
  }
  /* Maneja el evento de selección del componente de autocompletar.//+
   * Si se selecciona una opción, actualiza el valor de entrada de búsqueda y el héroe seleccionado.//+
   * Si no se selecciona ninguna opción, se restablece el héroe seleccionado.//+*/
  onSelectedOption( event: MatAutocompleteSelectedEvent ): void{
    if( !event.option.value ){
      this.selectedHero = undefined;

      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;

  }
}
