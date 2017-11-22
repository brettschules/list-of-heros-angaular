import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroes: Hero[] = HEROES;

  private selectedHero: Hero = new Hero(0, '');

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
  ngOnInit() { }
}
