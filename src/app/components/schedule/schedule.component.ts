import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service/user.service';
import { TheatorService } from 'src/app/service/theator-service/theator.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/service/movie-service/movie';
import { RoomSeats } from 'src/app/service/movie-service/roomSeats';
import { TheatorRoom } from 'src/app/service/movie-service/theatorRoom';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public scheduleList = ["any"];
  movieSchedule !: Movie[][]
  theatorList !: TheatorRoom[]
  seatsList !: RoomSeats[]

  constructor(
    public userService: UserService,
    public theatorService : TheatorService,
  ) { 

  

  }

  async ngOnInit(): Promise<void>  {

    this.theatorService.getTheators().subscribe(res =>{
      console.log("Theators List: ")
      console.log(res)
      this.theatorList = res as TheatorRoom[]
    })

    this.theatorService.getSeats().subscribe(res =>{
      console.log("Seats  List: ")
      console.log(res)
      this.seatsList = res as RoomSeats[]
    })

    // this.scheduleList = (await this.userService.getSchedule()).split(',')
    // this.userService.getSchedule2().subscribe(movieSchedule =>
    //   {
    //     this.movieSchedule = movieSchedule as Movie[][]
       
    //   })

    // this.userService.getAllAccounts().subscribe(res =>{
    //   console.log("accounts:")
    //   console.log(res)
      
    // })
 

  }

}
