import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroShowComponent } from './list-hero-show.component';

describe('ListHeroShowComponent', () => {
  let component: ListHeroShowComponent;
  let fixture: ComponentFixture<ListHeroShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHeroShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
