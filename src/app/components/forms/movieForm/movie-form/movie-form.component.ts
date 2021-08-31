import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/service/movie-service/movie.service';
import { Genre } from 'src/app/service/movie-service/genre';
import { Movie } from 'src/app/service/movie-service/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  newMovieForm : FormGroup;
  public signUpInvalid = false;
  public submitFail = false;
  private formSubmitAttempt = false;
  submitted = false;
  public  genreList = [{}] as Genre[];
  currentGenre !: Genre;
  // hh= null;
  // mm = null;
  // ss = null;

  hh !: String;
  mm !: String;
  ss !: String;
  

  constructor(
    private  movieService: MovieService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {


    var date1 = new Date("October 13, 2014 11:13:00");

    this.newMovieForm = this.formBuilder.group({
      movieTitle: ['', [ Validators.required]],
      runtime: ['',[]],
      //runtime: ['', [Validators.maxLength(6),Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
     // runtime: new Date("October 13, 2014 11:13:00"),
    //  runtime: ([date1, []]),
      genre: this.currentGenre,
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


  get f() { return this.newMovieForm.controls; }

  onSubmit() {
    console.log("Submitted")

    console.log(this.newMovieForm.value)

    
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


    this.newMovieForm.controls['runtime'].setValue(timeString);
    this.newMovieForm.controls['genre'].setValue(this.currentGenre);
    console.log(this.newMovieForm.value)
    
    this.movieService.addMovie(this.newMovieForm.value).subscribe(res =>{
      console.log("New movie")
      console.log(res)
    })





    this.newMovieForm.controls['genre'].setValue(this.currentGenre.genreId);

    

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



  

}
