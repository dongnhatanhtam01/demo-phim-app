import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//declare owner module
import { HomeModule } from './home/home.module';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
// import { NgxPaginationModule } from 'ngx-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
// import { AuthGuard } from './core/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    SiteFooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    AdminModule,
    AppRoutingModule,
    AuthenticationModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
