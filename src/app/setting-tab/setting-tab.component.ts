import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-tab',
  templateUrl: './setting-tab.component.html',
  styleUrls: ['./setting-tab.component.scss']
})
export class SettingTabComponent implements OnInit {
  public spaceInoneTab = 5;
  constructor() { }

  ngOnInit() {
  }

}
