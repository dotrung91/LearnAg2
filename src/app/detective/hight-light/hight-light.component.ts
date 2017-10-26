import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hight-light',
  templateUrl: './hight-light.component.html',
  styleUrls: ['./hight-light.component.scss']
})
export class HightLightComponent implements OnInit {
  color: string;
  changeColor(value) {
    this.color = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
