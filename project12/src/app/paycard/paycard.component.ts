import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-paycard',
  templateUrl: './paycard.component.html',
  styleUrls: ['./paycard.component.css']
})
export class PaycardComponent implements OnInit {

  constructor(private router:Router 
    ,private httpClientService:HttpClientService) { }

  ngOnInit() {

   
  }

  Onsubmit(){
   

    this.httpClientService.orderMail()
    .subscribe(response=>this.handleSuccessfulResponse()
    );
 
    this.router.navigateByUrl('/feedback');
    alert("inpaycash");

    
  }
  handleSuccessfulResponse(){
    alert(true);
  

  }


}
