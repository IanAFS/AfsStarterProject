import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication-service/authentication.service';
import { Account } from 'src/app/service/user-service/account';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm : FormGroup;
  public signUpInvalid = false;
  public submitFail = false;
  private formSubmitAttempt = false;
  submitted = false;
  account1 !: Account;

  constructor(
    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  )
   { 




    
    this.signUpForm = this.formBuilder.group({
      username: ['', [ Validators.required]],
      password: ['', Validators.required],
      email: ['', Validators.email],
      phone: [''],
    });
    


     
      

      // authService.getTest1().subscribe(res =>{
      //  let testM =   res as String
      // })

    
     
     
      // authService.getTest2().subscribe( res =>{
      //   console.log("Test2")
      //   let testList =   res.toString().split(',')
      //   console.log(testList)
      // })


      


 

    
      
    }
    
  

  ngOnInit()  {





 

  }

  get f() { return this.signUpForm.controls; }

  onSubmit() {
    console.log("Submitted")
    this.submitted = true
 

    if(this.signUpForm.valid){


      this.authService.signupSubmit(this.signUpForm.value).then((res) =>{

        try{
    
        

            res.subscribe((account: Account) =>
              {
                this.account1 = account as Account
                this.submitFail = false
                this.finishCheck()
              },
              (error: Error) =>{
         
                this.submitFail = true;
                console.error(error)
                this.finishCheck()
              })


          
  
        }
        catch{
          this.submitFail = true;
        }

       
      })
      // .catch((err) =>{
      //     this.submitFail = true;
      //   }
      // })
      .finally(() => {
          
        // console.log("fin")
        // if(!this.submitFail)  {
  
        //   console.log("res")
       
          
        //   this.router.navigate(["home"]);
        // }
      })
    }
    }


    public finishCheck(){
      if(!this.submitFail)  {

        this.router.navigate(["home"]);
    }
  }

}
