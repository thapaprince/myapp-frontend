import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
//-----component----------//
import { Profile2Component } from './features/profile2/profile2.component';
import { ProfileDetailsComponent } from './features/profile-details/profile-details.component';
//------------------//
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';

import { InitialsPipe } from './shared/pipe/initials.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { AppclickkeyDirective } from './shared/directives/appclickkey.directive';
import { DynamichoverDirective } from './shared/directives/dynamichover.directive';
import { AppbuttondisableDirective } from './shared/directives/appbuttondisable.directive';
import { AppifDirective } from './shared/directives/appif.directive';
import { RoleDirective } from './shared/directives/role.directive';


@NgModule({
  declarations: [
    AppComponent,
    Profile2Component,
    ProfileDetailsComponent,
    InitialsPipe,
    HighlightDirective,
    AppclickkeyDirective,
    DynamichoverDirective,
    AppbuttondisableDirective,
    AppifDirective,
    RoleDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule   ,
    HttpClientModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true} 
    // If multi is not set to true, 
    // Angular will override previous providers and only the last one will be used.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
