import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-one',
  templateUrl: './pipe-one.component.html',
  styleUrls: ['./pipe-one.component.scss']
})
export class PipeOneComponent implements OnInit {
  courseObj: any = {
    'id' : 20,
    'name' : 'Angular 2',
    'Date' : new Date(),
    'price' : 69.8548946546546,
    'require' : ['typescript', 'html', 'css']
  };

  percentA = 0.12524;
  percentB = 2.13555;
  priceC = 250002.212121;
  constructor() { }

  ngOnInit() {
  }

}
