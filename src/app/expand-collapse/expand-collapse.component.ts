import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.scss']
})
export class ExpandCollapseComponent implements OnInit {
  show: boolean;
  setShow(value) {
    this.show = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
