import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from '../movie-service/movie';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = "http://localhost:8080/User"

  movieSchedule!: Movie[][]

  constructor(
    private http: HttpClient
  ) {


  }

  public getMovies(){
    return this.http.get(this.userUrl+"/Movies")
  }



 async  getSchedule(): Promise<String>{
   try{

     let res = await this.http.get(this.userUrl+"/Schedule").toPromise();
     return  res.toString()
   }
   catch (error) {
   
    return "error";
  }
  }

  public getSchedule2(): Observable <Movie[][]> {
    try{
    
      return this.http.get(this.userUrl+"/Schedule2").pipe(
        map(result => <Movie[][]>result)
      )
  
    }
    catch (error) {
    
     return throwError("Error thorwnn")
   }
  }


  public getAllAccounts(){
    return this.http.get(this.userUrl+"/GetAll")
  }

}
