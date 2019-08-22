
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {  HttpClientService,Registration } from '../service/http-client.service';



@Component({

selector: 'app-register',

templateUrl: './register.component.html',

styleUrls: ['./register.component.css']

})

export class RegisterComponent implements OnInit {

public signup :Registration=new Registration("","","","","",null);


constructor(
  private httpClientService: HttpClientService,private router: Router) { }



ngOnInit() {

}



registeruser(): void {

console.log(this.signup);

this.httpClientService.registeruser(this.signup);

}

 
}

