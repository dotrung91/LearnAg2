import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-hero-show',
  templateUrl: './list-hero-show.component.html',
  styleUrls: ['./list-hero-show.component.scss']
})
export class ListHeroShowComponent implements OnInit {
  @Input() listhero = [];
  constructor() { }

  ngOnInit() {
  }

}

