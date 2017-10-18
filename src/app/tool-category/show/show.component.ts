import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  categories = [
    {
      'name': 'toan hoc',
      'title': 'Reprehenderit irure laborum id nulla labore nostrud sunt do quis commodo sint non cupidatat cupidatat.' ,
      'price' : '250000',
      'tags': ['Toan', 'Tu Nhien'],
      'img': '../assets/img/toan.jpg'
    },
    {
      'name': 'van hoc',
      'title': 'Sunt do quis commodo sint non cupidatat cupidatat.' ,
      'price' : '450000',
      'tags': ['Van', 'Tu Nhien'],
      'img': '../assets/img/van.jpg'
    },
    {
      'name': 'su hoc',
      'title': 'Labore nostrud sunt do quis commodo sint non cupidatat cupidatat.' ,
      'price' : '30000',
      'tags': ['Su', 'Tu Nhien'],
      'img': '../assets/img/su.jpg'
    }
  ];
  @Input() sizeTitles: number;
  @Input() currencyName = 'VND';
  @Input() currencyValue = 1;

  constructor() { }

  ngOnInit() {
  }

}
