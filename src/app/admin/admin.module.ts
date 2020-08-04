import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin.component';
import { PagerComponent } from './movie/pager/pager.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe'; 
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../shared/pipe/pipe.module';
const router: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'user', pathMatch: 'full'},
      {path: 'user', component: UserComponent},
      {path: 'movie', component: MovieComponent},
      // {path: '**', redirectTo: 'user'}
    ],
  }
];

@NgModule({
  declarations: [SignUpFormComponent, MovieComponent, UserComponent, AdminComponent, PagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    FilterPipeModule,
    PipeModule,
    RouterModule.forChild(router)
  ],
  exports: [SignUpFormComponent, MovieComponent, UserComponent,AdminComponent,PagerComponent]
})
export class AdminModule { }
