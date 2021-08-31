import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/service/movie-service/movie.service';
import { Genre } from 'src/app/service/movie-service/genre';
import { Movie } from 'src/app/service/movie-service/movie';
import { RoomSeats } from 'src/app/service/movie-service/roomSeats';
import { TheatorRoom } from 'src/app/service/movie-service/theatorRoom';
import { TheatorService } from 'src/app/service/theator-service/theator.service';


@Component({
  selector: 'app-showing-form',
  templateUrl: './showing-form.component.html',
  styleUrls: ['./showing-form.component.css']
})
export class ShowingFormComponent implements OnInit {

  newShowingForm : FormGroup;
  public signUpInvalid = false;
  public submitFail = false;
  private formSubmitAttempt = false;
  submitted = false;
  public  genreList = [{}] as Genre[];
  currentGenre !: Genre;
  public  movieList = [{}] as Movie[];
  currentMovie !: Movie;

  public  theatorRoomList = [{}] as TheatorRoom[];
  currentTheatorRoom !: TheatorRoom;
  // hh= null;
  // mm = null;
  // ss = null;

  hh !: String;
  mm !: String;
  ss !: String;
  

  constructor(
    private  movieService: MovieService,
    private  theatorService: TheatorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {


    var date1 = new Date("October 13, 2014 11:13:00");

    this.newShowingForm = this.formBuilder.group({
      seatsSold: ['',[]],
      timeSlot: ['',[]],
      movie: this.currentMovie,
      theatorRoom: this.currentTheatorRoom,
    });

       

    movieService.getGenre().subscribe( res =>{
      // console.log("Genre List")
      // console.log(res)
      this.genreList =   res as Genre[]
      
    }  
    )

    movieService.getMovies().subscribe( res =>{
      // console.log("Movie List")
      // console.log(res)
      this.movieList =   res as Movie[]
      
    }  
    )

    
    theatorService.getTheators().subscribe( res =>{
      // console.log("Theator List")
      // console.log(res)
      this.theatorRoomList =   res as TheatorRoom[]
      
    }  
    )

    

   }

  ngOnInit(): void {

    
  }


  get f() { return this.newShowingForm.controls; }

  onSubmit() {
    console.log("Submitted")

    this.newShowingForm.controls['seatsSold'].setValue(0);
    this.newShowingForm.controls['movie'].setValue(this.currentMovie);
    this.newShowingForm.controls['theatorRoom'].setValue(this.currentTheatorRoom);
    this.newShowingForm.controls['seatsSold'].setValue(0);

    console.log(this.newShowingForm.value)

   
    this.theatorService.addShowing(this.newShowingForm.value).subscribe(res =>{
     console.log("New Showing")
      console.log(res)
      this.router.navigate(["schedule"]);
    })

    //var timeString = this.hh+":"+this.mm+":"+this.ss


    // this.newShowingForm.controls['runtime'].setValue(timeString);
    // this.newShowingForm.controls['genre'].setValue(this.currentGenre);
    // console.log(this.newShowingForm.value)
    
    // this.movieService.addMovie(this.newShowingForm.value).subscribe(res =>{
    //   console.log("New movie")
    //   console.log(res)
    // })





    // this.newShowingForm.controls['genre'].setValue(this.currentGenre.genreId);

    



  }

  changeGenre(event : any) {
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })

    let gIndex = event.target.value

 
    let cGenre = this.genreList.filter(genre => {
     if( gIndex == (genre.genreId)){
       return genre
     }
     else{
       return null
     }
    }
      )
 
    this.currentGenre = cGenre[0]
 
  }

  changeMovie(event : any) {
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })

    let mIndex = event.target.value

 
    let cMovie = this.movieList.filter(movie => {
     if( mIndex == (movie.movieNumber)){
       return movie
     }
     else{
       return null
     }
    }
      )
 
    this.currentMovie = cMovie[0]
 
  }

  changeTheatorRoom(event : any) {
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })

    let tIndex = event.target.value

 
    let cRoom = this.theatorRoomList.filter(tRoom => {
     if( tIndex == (tRoom.theatorRoomId)){
       return tRoom
     }
     else{
       return null
     }
    }
      )
 
    this.currentTheatorRoom = cRoom[0]
 
  }



  

}
