import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private hero: string;
  constructor() { }

  ngOnInit() {
    this.hero = 'Windstrom'
  }

}