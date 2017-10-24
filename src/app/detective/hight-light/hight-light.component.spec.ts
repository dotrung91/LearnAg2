import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightLightComponent } from './hight-light.component';

describe('HightLightComponent', () => {
  let component: HightLightComponent;
  let fixture: ComponentFixture<HightLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
