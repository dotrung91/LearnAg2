import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

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




  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }




  constructor() { }

  ngOnInit() {
  }

}
