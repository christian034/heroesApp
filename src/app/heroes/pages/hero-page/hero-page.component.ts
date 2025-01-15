//@Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//@Angular rxjs
import { delay, switchMap } from 'rxjs';
//heroes services
import { HeroesService } from '../../services/heroes.service';
//herores interfaces
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  //En caso de que no exista un heroe con el id pasado por parametro se redirecciona a list-page y muestra los heroes que existen.
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById( id )),
    )
    .subscribe( hero => {
      if ( !hero ) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      return;
    });
  }

  //Redirige a la lista de heroes.
  goBack(): void {
    this.router.navigateByUrl('heroes/list')
  }
}
