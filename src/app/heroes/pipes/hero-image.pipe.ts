//@Angular
import { Pipe, PipeTransform } from '@angular/core';
//Interfaces
import { Hero } from '../interfaces/hero.interface';


@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  //Muestra si el heroe tiene una imagen y si no muestra esta imagen no-image.png
  transform(hero: Hero): string {
    if ( !hero.id && !hero.alt_img ){
      return 'assets/no-image.png';
    }

    if ( hero.alt_img ) return hero.alt_img;

    return `assets/heroes/${hero.id}.jpg`;
  }

}
