import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-hero-control',
  templateUrl: './list-hero-control.component.html',
  styleUrls: ['./list-hero-control.component.scss']
})
export class ListHeroControlComponent implements OnInit {
  nameNewHero: string;
  @Output() newHero = new EventEmitter<any>();

  addHero (name, fly) {
    this.newHero.emit({
      name: name,
      fly: fly
    });
    this.nameNewHero = '';
  }
  constructor() { }
  ngOnInit() {
  }

}
