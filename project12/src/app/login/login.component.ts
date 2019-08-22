

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClientService, SignIn } from '../service/http-client.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  signin:SignIn=new SignIn("","");
  
  static flag:boolean=false;
  static signin: any;
  
  
  
  constructor(private httpClientService:HttpClientService, private router: Router) { }
  
  
  
  ngOnInit() {
   
  }
  
  
  
  // onSumbit()
  
  // {
  
  // this.loginUser(); 
  
  // }
  
  
  
  
  signinuser(): void {
  
  console.log(this.signin);
  //HomeComponent.firstname=this.signin.email;
  
  this.httpClientService.signinuser(this.signin)
  
  .subscribe(data => {
  
  console.log(data);
  
  
  
  if(!data)
  
  {
  
  alert("try again");
  
  }
  
  else{
  
  LoginComponent.flag=true;
 
  
  this.router.navigateByUrl('/home');
alert("success login");
  
  console.log("hi");

  
  }
  
  
  })
  
  }
  
  
  ValidateUser(): boolean{
  return LoginComponent.flag;
  
  }
  
  
  
   //RegisterUser(): void {
  
   //this.router.navigateByUrl('register') 
  
  
  
  //}
}
