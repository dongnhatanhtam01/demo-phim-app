import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMovieDetailComponent } from './home-movie-detail.component';

describe('HomeMovieDetailComponent', () => {
  let component: HomeMovieDetailComponent;
  let fixture: ComponentFixture<HomeMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
