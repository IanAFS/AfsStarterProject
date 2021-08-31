import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from '../movie-service/movie';
import { RoomSeats } from '../movie-service/roomSeats';
import { TheatorRoom } from '../movie-service/theatorRoom';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheatorService {

  theatorUrl = "http://localhost:8080/Theator"
  seatsUrl = "http://localhost:8080/Theator/Seats"

  constructor(
    private http: HttpClient
  ) { }

 
    public getTheators(){
      return this.http.get(this.theatorUrl+"/GetAll")
    }

    public getSeats(){
      return this.http.get(this.seatsUrl+"/GetAll")
    }

      public addShowing(roomSeats: RoomSeats){
    console.log("Trying to add RoomSeats")
    console.log(roomSeats)
    return this.http.post<RoomSeats>(this.seatsUrl+"/addShowing", roomSeats)
  }
}
