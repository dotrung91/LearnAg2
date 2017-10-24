import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroControlComponent } from './list-hero-control.component';

describe('ListHeroControlComponent', () => {
  let component: ListHeroControlComponent;
  let fixture: ComponentFixture<ListHeroControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHeroControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
