import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { DeactvateGuard } from '../shared/guards/deactvate.guard';

const router: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent, canDeactivate: [DeactvateGuard] },
];

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(router),
  ],
  exports: [SigninComponent, SignupComponent]
})
export class AuthenticationModule { }
