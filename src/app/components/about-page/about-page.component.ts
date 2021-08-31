import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service/user.service';
import { Account } from 'src/app/service/user-service/account';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {


  accountList !: Account[]

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {

    
    this.userService.getAllAccounts().subscribe(res =>{
      console.log("accounts:")
      console.log(res)
      this.accountList = res as Account[]
      
    })


  
  }

}
