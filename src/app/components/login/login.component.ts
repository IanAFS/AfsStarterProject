import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  // form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  submitted = false;

  constructor(
    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  )
   { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
      // // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //   this.router.navigate(['/']);
    }
    
  

  ngOnInit()  {
   

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log("Submitted")
    this.submitted = true
    }

}
