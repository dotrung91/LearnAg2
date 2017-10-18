import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  valueTabs = [
    3, 4, 5, 6
  ];

  @Output() valuetab = new EventEmitter();

  setValueTab(event) {
    this.valuetab = event;
    console.log(this.valuetab);
  }

  constructor() { }

  ngOnInit() {
  }

}
