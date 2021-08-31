import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

import { Account } from '../user-service/account';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authUrl = "http://localhost:8081/Authentication"

  account: Account

  constructor(
    private http: HttpClient
  ) { 
    this.account ={
      accountId: 1,
    username: "null",
    password: "null",
    createTime: "null",
    points: 0,
    roleId:{

    },
    email: "null",
    }
  }

//: Promise<String> 

public   getTest1() {
  console.log("getTest1")
  return this.http.get(this.authUrl+"/Test1", {responseType: 'text'})
  // try{

  //   console.log(this.http.get(this.authUrl+"/Test"))
  //   return     this.http.get(this.authUrl+"/Test").pipe(
  //     map(result => <String>result)
     
  //   )
  // }
  // catch(e){
  //   return e
  // }
}

public getTest2(){
  return this.http.get(this.authUrl+"/Test2")
}

 public  async  signupSubmit( acc: Account) {
    try{
  
      
      this.account.username = acc.username
      this.account.password = acc.password
      this.account.createTime = "null"
    
     return this.http.post(this.authUrl+"/Signup", this.account)
   
    }
    catch (error) {
      return error;
  
   
   }
   }



   public  signupSubmit2( acc: Account) {
    try{
  
      
      this.account.username = acc.username
      this.account.password = acc.password
      this.account.createTime = "null"

     return this.http.post(this.authUrl+"/Signup", this.account)
  
    }
    catch (error) {
      return error;
   
   }
   }


}
