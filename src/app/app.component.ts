import { Component, ViewEncapsulation, NgModule, OnInit } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-web';
  constructor(private authUserInit: AuthenticationService) {

  }
  ngOnInit() {
    this.authUserInit.initUser()
  }
}
