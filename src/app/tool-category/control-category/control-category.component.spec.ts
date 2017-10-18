import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCategoryComponent } from './control-category.component';

describe('ControlCategoryComponent', () => {
  let component: ControlCategoryComponent;
  let fixture: ComponentFixture<ControlCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
