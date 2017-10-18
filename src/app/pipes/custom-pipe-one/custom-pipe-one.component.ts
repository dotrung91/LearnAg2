import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-one',
  templateUrl: './custom-pipe-one.component.html',
  styleUrls: ['./custom-pipe-one.component.scss']
})
export class CustomPipeOneComponent implements OnInit {

  arrName = [ 'Trung', 'Nam', 'Son', 'Hoa'];
  categories = [ 'Quan', 'Ao', 'Giay', 'Dep', 'Quan', 'Ao', 'Giay', 'Dep'];
  arrNumber = [1, 2, 3, 4, 5, 6];

  descripttion = 'Consequat aliqua commodo commodo fugiat, Consequat aliqua commodo commodo fugiat aliqua imum amount of characters per line disable.';

  text = 'Angular 2 is very easy';

  constructor() { }

  ngOnInit() {
  }

}
