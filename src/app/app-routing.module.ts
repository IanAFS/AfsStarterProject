import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MovieFormComponent } from './components/forms/movieForm/movie-form/movie-form.component';
import { MovieEditFormComponent } from './components/forms/movie-edit-form/movie-edit-form/movie-edit-form.component';
import { ShowingFormComponent } from './components/forms/showingForm/showing-form/showing-form.component';

const routes: Routes = [

   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'footer', component: FooterComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignUpComponent }, 
  { path: 'movie', component: MoviePageComponent }, 
  { path: 'about', component: AboutPageComponent }, 
  { path: 'schedule', component: ScheduleComponent }, 
  { path: 'movieForm', component: MovieFormComponent }, 
  { path: 'movieEditForm', component: MovieEditFormComponent }, 
  { path: 'movieEditForm/:id', component: MovieEditFormComponent }, 
  { path: 'showingForm', component: ShowingFormComponent }, 


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
