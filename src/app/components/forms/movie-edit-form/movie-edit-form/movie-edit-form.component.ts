import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/service/movie-service/movie.service';
import { Genre } from 'src/app/service/movie-service/genre';
import { Movie } from 'src/app/service/movie-service/movie';

@Component({
  selector: 'app-movie-edit-form',
  templateUrl: './movie-edit-form.component.html',
  styleUrls: ['./movie-edit-form.component.css']
})
export class MovieEditFormComponent implements OnInit {

  editMovieForm : FormGroup;
  public signUpInvalid = false;
  public submitFail = false;
  private formSubmitAttempt = false;
  submitted = false;
  public  genreList = [{}] as Genre[];
  currentGenre !: Genre;
  currentGenreId !: number;
  currentMovie : Movie;


  hh !: String;
  mm !: String;
  ss !: String;
  

  constructor(
    private  movieService: MovieService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private routerLink: RouterLink,
  ) {

    this.currentMovie = {
      movieTitle: "",
      movieNumber: 0,
      runtime: "",
      genre: {
        
      },
      
    }
    var movieId =  this.route.snapshot.paramMap.get('id')
    console.log("Movie you are editing is : "+movieId)
    this.movieService.getMoviesById(Number(movieId)).subscribe(res =>{
      console.log("The movie is")
      console.log(res);
      this.currentMovie = <Movie> res;
      this.currentGenreId = Number(this.currentMovie.genre.genreId)
      console.log("Genre Id")
      this.editMovieForm.controls['genre'].setValue(this.currentMovie.genre.name);
      console.log(this.currentMovie.genre.genreId)
      console.log(res)
      this.hh = this.currentMovie.runtime.substring(0,2)
      this.mm = this.currentMovie.runtime.substring(3,5)
      this.ss = this.currentMovie.runtime.substring(6,8)
      this.editMovieForm.controls['movieTitle'].setValue(this.currentMovie.movieTitle);
     // this.editMovieForm.controls['genre'].setValue(this.currentMovie.genre);
    })


    var date1 = new Date("October 13, 2014 11:13:00");
    
    this.editMovieForm = this.formBuilder.group({
      movieTitle: ['', [ Validators.required]],
      runtime: ['',[]],
      //runtime: ['', [Validators.maxLength(6),Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
     // runtime: new Date("October 13, 2014 11:13:00"),
    //  runtime: ([date1, []]),
      genre: this.currentGenre,
      movieNumber: []
    });

       

    movieService.getGenre().subscribe( res =>{
      console.log("Genre List")
      console.log(res)
      this.genreList =   res as Genre[]
      // console.log(this.movieList2);
    }  
    )

   }

  ngOnInit(): void {
    
    
  }


  get f() { return this.editMovieForm.controls; }

  onSubmit() {
    console.log("Submitted")

    console.log(this.editMovieForm.value)

    
    if(!this.hh)
    this.hh = "00"
    if(this.hh.toString().length<2)
    this.hh = "0"+this.hh

    if(!this.mm)
    this.mm = "00"
    if(this.mm.toString().length < 2)
    this.mm = "0"+this.mm

    if(!this.ss)
    this.ss = "00"
    if(this.ss.toString().length < 2)
    this.ss = "0"+this.ss

    var timeString = this.hh+":"+this.mm+":"+this.ss


    this.editMovieForm.controls['runtime'].setValue(timeString);
    if(this.currentGenre)
    this.editMovieForm.controls['genre'].setValue(this.currentGenre);
    else{
      this.editMovieForm.controls['genre'].setValue(this.currentMovie.genre);
    }
    // console.log(this.editMovieForm.value)
    this.editMovieForm.controls['movieNumber'].setValue(this.currentMovie.movieNumber);

    this.movieService.updateMovie(this.editMovieForm.value).subscribe(res =>{
      console.log("Update movie")
      console.log(res)
      this.router.navigate(["movie"]);
    })





    // this.editMovieForm.controls['genre'].setValue(this.currentGenre.genreId);

    

    // var hh : HTMLElement | null = document.getElementById("hh");
    // var mm : HTMLElement | null = document.getElementById("mm");
    // var ss : HTMLElement | null = document.getElementById("ss");
    // var hh= window.document.getElementById("hh")!;
    // var mm= window.document.getElementById("mm")!;
    // var ss= window.document.getElementById("ss")!;

    console.log("hh:mm:ss")
    console.log(this.hh+":"+this.mm+":"+this.ss)
    // console.log(hh+":"+mm+":"+ss)
  }

  changeGenre(event : any) {
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })

    let gName = event.target.value
    console.log("Event")
    console.log(event.target.value)
    let cGenre = this.genreList.filter(genre => {
     if( gName == (genre.name)){
       return genre
     }
     else{
       return null
     }
    }
      )
 
    this.currentGenre = cGenre[0]
    // this.editMovieForm.controls['genre'].setValue(this.currentMovie.genre);
 
  }


  deleteMovie(){
    console.log("Delete Movie")
    this.movieService.deleteMovie(this.currentMovie).subscribe(res =>{
      console.log("Deleted movie")
      console.log(res)
      this.router.navigate(["movie"]);
    })

  }



  

}
