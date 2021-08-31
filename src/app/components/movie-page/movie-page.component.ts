import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

import { UserService } from 'src/app/service/user-service/user.service';
import { MovieService } from 'src/app/service/movie-service/movie.service';
import { Movie } from 'src/app/service/movie-service/movie';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  public canGet = "can't get list"
  public movieList = ["any"];
  Movie : Movie[];
  // public  movieList2 = [{}] as Movie[];
  public  movieList2 = [{}] as Movie[];
  public accountList = ["any"];
  

  constructor(
    public userService: UserService,
    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    // private routerLink: RouterLink,
  ) { 

    this.Movie = []


    // userService.getMovies().subscribe( res =>{
    //   this.movieList =  res.toString().split(',')
    //   this.canGet = "got list"
    // }  
    // )

    movieService.getMovies().subscribe( res =>{
      console.log("Movies list 2")
      console.log(res)
      this.movieList2 =   res as Movie[]
      console.log(this.movieList2)
      // console.log(this.movieList2);
    }  
    )

    // userService.getAllAccounts().subscribe( res =>{
    //   console.log("Accounts")
    //   console.log(res)
    //   this.accountList =  res.toString().split(',')
    // }  
    // )
    











  }

  ngOnInit(): void {
  }

}
