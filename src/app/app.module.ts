import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MovieFormComponent } from './components/forms/movieForm/movie-form/movie-form.component';
import { MovieEditFormComponent } from './components/forms/movie-edit-form/movie-edit-form/movie-edit-form.component';
import {  RouterModule, Routes } from '@angular/router';
import { ShowingFormComponent } from './components/forms/showingForm/showing-form/showing-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MoviePageComponent,
    AboutPageComponent,
    SignUpComponent,
    ScheduleComponent,
    MovieFormComponent,
    MovieEditFormComponent,
    ShowingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([]),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
