import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.scss']
})
export class ListNameComponent implements OnInit {
  listNames = [
    'Trung',
    'Name',
    'Huyen',
    'Chi',
    'Phuong'
  ];

  checkFirt(i) {
    if (i === 0) {
      return true;
    }
  }

  checkLast(i) {
    if (i === this.listNames.length - 1) {
      return true;
    }
  }

  checkNumber(i) {
    if (i % 2 === 0 && i !== 0 && i !== this.listNames.length - 1) {
      return true;
    } else if (i !== 0 && i !== this.listNames.length - 1) {
      return false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
