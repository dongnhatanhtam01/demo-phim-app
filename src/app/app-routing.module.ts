import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
//children
import { HomeComponent } from './home/home/home.component';
import { SignUpFormComponent } from './admin/sign-up-form/sign-up-form.component';
import { HomeMovieDetailComponent } from './home/home-movie-detail/home-movie-detail.component';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'admin',
     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
     canActivate: [AuthGuard]
  }
  // {path: '*', component: NotFound}
  // { path: '**', redirectTo: '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: environment.production})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
