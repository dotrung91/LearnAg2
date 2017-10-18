import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOneComponent } from './pipe-one.component';

describe('PipeOneComponent', () => {
  let component: PipeOneComponent;
  let fixture: ComponentFixture<PipeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
