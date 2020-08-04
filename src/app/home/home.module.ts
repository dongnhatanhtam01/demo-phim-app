import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeMovieListComponent } from './home-movie-list/home-movie-list.component';
import { HomeMovieScheduleComponent } from './home-movie-schedule/home-movie-schedule.component';
import { HomeMovieDetailComponent } from './home-movie-detail/home-movie-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from '../layout/site-layout/site-layout.component';
import { SignUpFormComponent } from '../admin/sign-up-form/sign-up-form.component';

const router: Routes = [
  //Site routes goes here 
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path: 'detail/:maPhim', component: HomeMovieDetailComponent}
      // { path: 'test/:id', component: AboutComponent }
    ]
  },
  { path: 'sign-up', component: SignUpFormComponent },
  // { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [HomeComponent, HomeSliderComponent, HomeMovieListComponent, HomeMovieScheduleComponent, HomeMovieDetailComponent],
  imports: [
    CommonModule,RouterModule.forChild(router)
  ],
  exports: [HomeComponent, HomeSliderComponent, HomeMovieListComponent, HomeMovieScheduleComponent, HomeMovieDetailComponent]
})
export class HomeModule { }
