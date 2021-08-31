import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from '../movie-service/movie';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUrl = "http://localhost:8080/Movies"

  constructor(
    private http: HttpClient
  ) { }

  public getMovies(){
    return this.http.get(this.movieUrl+"/GetAll")
  }

  public getMoviesById(movieId: Number){
    return this.http.get(this.movieUrl+"/GetMovieById/"+movieId)
  }

  public addMovie(movie: Movie){
    console.log("Trying to add movie")
    console.log(movie)
    return this.http.post<Movie>(this.movieUrl+"/addMovie", movie)
  }

  public updateMovie(movie: Movie){
    console.log("Trying to update movie")
    console.log(movie)
    return this.http.post<Movie>(this.movieUrl+"/updateMovie", movie)
  }

  public deleteMovie(movie: Movie){
    console.log("Trying to delete movie")
    console.log(movie)
    return this.http.post<Movie>(this.movieUrl+"/deleteMovie", movie)
  }

  public getGenre(){
    return this.http.get(this.movieUrl+"/GetAllGenre")
  }

}
