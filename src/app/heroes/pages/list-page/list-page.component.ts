//@Angular
import { Component, OnInit } from '@angular/core';
//Heroes TS
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(private HeroesService: HeroesService) {}

  ngOnInit(): void {
    this.HeroesService.getHeroes()
     .subscribe( heroes => this.heroes = heroes );
  }
}
