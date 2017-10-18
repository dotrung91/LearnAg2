import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-category',
  templateUrl: './control-category.component.html',
  styleUrls: ['./control-category.component.scss']
})
export class ControlCategoryComponent implements OnInit {
  sizes = ['Small', 'Medium', 'Full'];
  currencys = ['VND', 'USD'];
  constructor() { }

  @Input() sizeSelected: string;
  @Output() sizeTitles = new EventEmitter();
  @Output() currencyName = new EventEmitter();
  @Output() currencyValue = new EventEmitter();
  changeSize(event) {
    if (event === 'Small') {
      this.sizeTitles.emit(10);
    } else if (event === 'Medium') {
      this.sizeTitles.emit(20);
    } else {
      this.sizeTitles.emit(100);
    }
  }

  changeCurrency(event) {
    if (event === 'USD') {
      this.currencyName.emit(event);
      this.currencyValue.emit(23000);
    } else {
      this.currencyName.emit('VND');
      this.currencyValue.emit(1);
    }

    console.log(event);
  }
  ngOnInit() {
  }

}
