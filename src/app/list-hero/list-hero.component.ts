import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss']
})
export class ListHeroComponent implements OnInit {
  listName = [];

  addToList(event) {
    this.listName.push(event);
    console.log(this.listName);
  }

  constructor() { }

  ngOnInit() {
  }

}
