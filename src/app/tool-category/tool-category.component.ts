import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-category',
  templateUrl: './tool-category.component.html',
  styleUrls: ['./tool-category.component.scss']
})
export class ToolCategoryComponent implements OnInit {
  sizeOn = 10;
  sizeSelected = 'Small';
  currencyName = 'VND';
  currencyValue = 1;
  constructor() { }
  handSize(event) {
    this.sizeOn = event;
    console.log(this.sizeOn);
  }

  handCurrencyName (event) {
    this.currencyName = event;
  }
  handCurrencyValue (event) {
    this.currencyValue = event;
  }
  ngOnInit() {
  }

}
