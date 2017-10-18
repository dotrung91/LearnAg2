import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCategoryComponent } from './tool-category.component';

describe('ToolCategoryComponent', () => {
  let component: ToolCategoryComponent;
  let fixture: ComponentFixture<ToolCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
